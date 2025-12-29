import * as React from "react";

import SelectionContext, { Selection, defaultSelection } from "./selectionContext";

interface RefSelection extends Selection {
  viewer: "LINEAR" | "CIRCULAR";
}

export type InputRefFunc = (id: string, ref: RefSelection) => any;

export type SeqVizMouseEvent = React.MouseEvent & {
  target: { id: string };
};

export interface SelectionHandlerProps {
  bpsPerBlock: number;
  center: { x: number; y: number };
  centralIndex: number;
  children: (
    inputRef: InputRefFunc,
    handleMouseEvent: (e: SeqVizMouseEvent) => void,
    onUnmount: (ref: unknown) => void,
  ) => React.ReactNode;
  seq: string;
  setCentralIndex: (viewer: "LINEAR" | "CIRCULAR", index: number) => void;
  setSelection: (selection: Selection, force?: boolean) => void;
  yDiff: number;
}

/**
 * SelectionHandler handles sequence selection. Each click, drag, etc, is
 * noted and mapped to a sequence index.
 */
export default class SelectionHandler extends React.PureComponent<SelectionHandlerProps> {
  static displayName = "WithSelectionHandler";

  static contextType = SelectionContext;
  static context: React.ContextType<typeof SelectionContext>;
  declare context: React.ContextType<typeof SelectionContext>;

  /** Only state is the selection range */
  state = { ...defaultSelection };

  /* previous base cursor is over, used in circular drag select */
  previousBase: null | number = null;

  /* directionality of drag (true if clockwise), used in circular drag select */
  forward: null | boolean = null;

  /* full selection length, used in circular drag select */
  fullSelectionLength = 0;

  /* is the user currently dragging across the surface of the seqViewer? this is tracked on SeqBlocks in particular (onMouseOver), used in circular drag select */
  dragEvent = false;

  /* is there a selection already, used for shift-click catch up */
  selectionStarted = false;

  /* was the last selection action a shift click, used for shift-click catch up */
  shiftSelection = false;

  /* unix time of the last click (awful attempt at detecting double clicks) */
  lastClick = Date.now();

  /* anchor range for shift+click selections - tracks both ends of the original selection */
  selectionAnchorStart: number | null = null;
  selectionAnchorEnd: number | null = null;

  /* established direction for shift+click - once set, preserved until new anchor */
  selectionClockwise: boolean | null = null;

  /** a map between the id of child elements and their associated SelectRanges */
  idToRange = new Map<string, Selection>();

  componentDidMount = () => {
    if (!document) return;
    document.addEventListener("mouseup", this.stopDrag);
  };

  componentWillUnmount = () => {
    if (!document) return;
    document.removeEventListener("mouseup", this.stopDrag);
  };

  /** Stop the current drag event from happening */
  stopDrag = () => {
    this.dragEvent = false;
  };

  /**
   * Called at start of drag to make sure checkers are reset to default state
   */
  resetCircleDragVars = (start: null | number) => {
    this.previousBase = start;
    this.forward = null;
    this.fullSelectionLength = 0;
    this.dragEvent = true; // start a drag event
  };

  /**
   * a ref callback for mapping the id of child to its SelectRange
   * it stores the id of all elements
   **/
  inputRef = (ref: string, selectRange: Selection) => {
    this.idToRange.set(ref, { ref, ...selectRange });
  };

  /**
   * remove the ref by ID.
   *
   * NOTE: We intentionally do NOT remove entries from idToRange on unmount.
   * This is because React's timing can cause unmount callbacks to fire AFTER
   * new components have registered, which would incorrectly remove valid entries.
   * Stale entries are harmless - they'll be overwritten when the block re-registers.
   */
  removeMountedBlock = (_ref: unknown) => {
    // Intentionally empty - see comment above
  };

  /**
   * Handle shift+click to extend selection to include a clicked element.
   * Returns true if this was a shift+click and was handled, false otherwise.
   */
  handleShiftClickExtend = (
    e: SeqVizMouseEvent,
    clickedStart: number,
    clickedEnd: number,
    viewer: "LINEAR" | "CIRCULAR",
  ): boolean => {
    const selection = this.context;

    if (!e.shiftKey || selection.start === undefined || selection.end === undefined) {
      return false;
    }

    // Use anchor range if available, otherwise fall back to selection boundaries
    const anchorStart = this.selectionAnchorStart ?? selection.start;
    const anchorEnd = this.selectionAnchorEnd ?? selection.end;
    const seqLength = this.props.seq.length;

    let newStart: number;
    let newEnd: number;
    let clockwise: boolean;

    if (viewer === "LINEAR") {
      // LINEAR viewer: simple min/max union, never wrap around
      newStart = Math.min(anchorStart, clickedStart);
      newEnd = Math.max(anchorEnd, clickedEnd);
      clockwise = true;
    } else {
      // CIRCULAR viewer: handle wrap-around and direction

      // Check if anchor range is inside the clicked element
      const anchorInsideClicked = clickedStart <= anchorStart && anchorEnd <= clickedEnd;

      if (anchorInsideClicked) {
        // Select the entire element since the anchor is inside it
        newStart = clickedStart;
        newEnd = clickedEnd;
        clockwise = true;
        this.selectionClockwise = null; // Reset since we're selecting a whole element
      } else if (this.selectionClockwise !== null) {
        // Direction already established and LOCKED until next non-shift click
        clockwise = this.selectionClockwise;

        // Helper: clockwise distance from 'from' to 'to'
        const clockwiseDist = (from: number, to: number): number => (to >= from ? to - from : seqLength - from + to);

        // Helper: counter-clockwise distance
        const counterClockwiseDist = (from: number, to: number): number =>
          to <= from ? from - to : from + seqLength - to;

        // Points that must be included in the selection
        const points = [anchorStart, anchorEnd, clickedStart, clickedEnd];

        if (clockwise) {
          // Clockwise: fixed start at anchorStart, find furthest point clockwise
          newStart = anchorStart;
          newEnd = anchorEnd;
          let maxDist = 0;
          for (const p of points) {
            const dist = clockwiseDist(anchorStart, p);
            if (dist > maxDist) {
              maxDist = dist;
              newEnd = p;
            }
          }
        } else {
          // Counter-clockwise: fixed start at anchorEnd, find furthest point counter-clockwise
          newStart = anchorEnd;
          newEnd = anchorStart;
          let maxDist = 0;
          for (const p of points) {
            const dist = counterClockwiseDist(anchorEnd, p);
            if (dist > maxDist) {
              maxDist = dist;
              newEnd = p;
            }
          }
        }
      } else {
        // First shift+click - use UNION with SHORTEST PATH
        // Calculate the shortest arc that includes both elements fully
        const union = this.calcCircularUnion(anchorStart, anchorEnd, clickedStart, clickedEnd, seqLength);
        newStart = union.start;
        newEnd = union.end;
        clockwise = union.clockwise;

        // Determine extension direction based on which arc was picked:
        // - If union starts at anchorStart, we're extending forward (clockwise from anchor)
        // - If union starts at clickedStart, we're extending backward (counter-clockwise from anchor)
        this.selectionClockwise = union.start === anchorStart;
      }
    }

    this.setSelection(
      {
        clockwise,
        end: newEnd,
        start: newStart,
        type: "SEQ",
      },
      true,
    );

    this.dragEvent = false;
    this.lastClick = Date.now();
    return true;
  };

  /**
   * Set anchor range for future shift+clicks. Normalizes to [min, max].
   * Clears established direction so next shift+click calculates shortest path.
   */
  setAnchorRange = (start: number, end: number) => {
    this.selectionAnchorStart = Math.min(start, end);
    this.selectionAnchorEnd = Math.max(start, end);
    this.selectionClockwise = null; // Reset direction for new anchor
  };

  /**
   * the selected child element is something that is known by reference.
   * update its SeqBlock's range (or any others affected) with the newly
   * active range
   */
  mouseEvent = (e: SeqVizMouseEvent) => {
    const { setCentralIndex } = this.props;

    // should not be updating selection since it's not a drag event time
    if ((e.type === "mousemove" || e.type === "mouseup") && !this.dragEvent) {
      return;
    }

    // storing this to figure out if it was a double click
    const msSinceLastClick = Date.now() - this.lastClick;

    let knownRange = this.dragEvent
      ? this.idToRange.get(e.currentTarget.id) // only look for SeqBlocks
      : this.idToRange.get(e.target.id) || this.idToRange.get(e.currentTarget.id); // elements and SeqBlocks

    if (!knownRange) {
      return; // there isn't a known range with the id of the element
    }
    knownRange = { ...knownRange, end: knownRange.end || 0, start: knownRange.start || 0 };

    const { direction, end, start, viewer } = knownRange;
    switch (knownRange.type) {
      case "ANNOTATION":
      case "FIND":
      case "TRANSLATION":
      case "TRANSLATION_HANDLE":
      case "ENZYME":
      case "PRIMER":
      case "HIGHLIGHT": {
        if (viewer !== "LINEAR" && setCentralIndex) {
          // if an element was clicked on the circular viewer, scroll the linear
          // viewer so the element starts on the first SeqBlock
          setCentralIndex("LINEAR", start || 0);
        }

        // Handle shift+click to extend selection
        if (this.handleShiftClickExtend(e, start || 0, end || 0, viewer || "LINEAR")) {
          return;
        }

        // Normal click - select just this element and set anchor range
        const clockwise = direction ? direction === 1 : true;
        const selectionStart = clockwise ? start || 0 : end || 0;
        const selectionEnd = clockwise ? end || 0 : start || 0;

        this.setAnchorRange(selectionStart, selectionEnd);
        this.setSelection({
          ...knownRange,
          clockwise: clockwise,
          end: selectionEnd,
          start: selectionStart,
        });

        this.dragEvent = false;
        this.lastClick = Date.now();

        break;
      }
      case "AMINOACID": {
        const aaClockwise = direction ? direction === 1 : true;
        let selectionStart = aaClockwise ? start || 0 : end || 0;
        let selectionEnd = aaClockwise ? end || 0 : start || 0;
        const clockwise = aaClockwise;

        // if they double clicked, select the whole translation
        // https://en.wikipedia.org/wiki/Double-click#Speed_and_timing
        if (msSinceLastClick < 300 && knownRange.parent) {
          knownRange = { ...knownRange.parent, end: knownRange.parent.end || 0, start: knownRange.parent.start || 0 };
          selectionStart = aaClockwise ? knownRange.start || 0 : knownRange.end || 0;
          selectionEnd = aaClockwise ? knownRange.end || 0 : knownRange.start || 0;
        } else if (this.handleShiftClickExtend(e, start || 0, end || 0, viewer || "LINEAR")) {
          // Shift+click handled - stop propagation and return
          e.stopPropagation();
          return;
        }

        // Normal click or double-click - set anchor and selection
        this.setAnchorRange(selectionStart, selectionEnd);
        this.setSelection({
          ...knownRange,
          clockwise: clockwise,
          end: selectionEnd,
          start: selectionStart,
        });

        this.dragEvent = false;
        this.lastClick = Date.now();

        e.stopPropagation(); // necessary to stop a double click

        break;
      }
      case "SEQ": {
        if (viewer === "LINEAR") {
          this.handleLinearSeqEvent(e, { ...knownRange, end: knownRange.end || 0, start: knownRange.start || 0 });
        } else if (viewer === "CIRCULAR") {
          this.handleCircularSeqEvent(e);
        }

        break;
      }
      default:
    }
  };

  /**
   * Handle a sequence selection on a linear viewer
   */
  handleLinearSeqEvent = (e: SeqVizMouseEvent, knownRange: { end: number; start: number }) => {
    const selection = this.context;

    const currBase = this.calculateBaseLinear(e, knownRange);
    const clockwiseDrag = selection.start !== null && currBase >= (selection.start || 0);

    const isContextMenu = e.type === "mousedown" && (e.button === 2 || (e.button === 0 && e.ctrlKey));

    if (isContextMenu) {
      const { clientX, clientY, currentTarget } = e;
      const selectionBoxes = currentTarget?.querySelectorAll(".la-vz-selection-block");

      if (selectionBoxes?.length > 0) {
        const checkInsideClick = ({
          box: { bottom, left, right, top },
          mouseX,
          mouseY,
        }: {
          box: { bottom: number; left: number; right: number; top: number };
          mouseX: number;
          mouseY: number;
        }) => left <= mouseX && right >= mouseX && top <= mouseY && bottom >= mouseY;

        for (let index = 0; index < selectionBoxes.length; index++) {
          const selectionBox = selectionBoxes[index];
          const { bottom, left, right, top } = selectionBox.getBoundingClientRect();

          // disabled start selection when using the context menu and the right click was on the selection block
          if (
            checkInsideClick({
              box: { bottom, left, right, top },
              mouseX: clientX,
              mouseY: clientY,
            })
          ) {
            return;
          }
        }
      }
    }

    if (e.type === "mousedown" && currBase !== null) {
      // this is the start of a drag event
      let newStart = currBase;
      let newEnd = currBase;

      if (e.shiftKey && selection.start !== undefined && selection.end !== undefined) {
        // Extending selection with shift+click - use anchor range
        const anchorStart = this.selectionAnchorStart ?? selection.start;
        const anchorEnd = this.selectionAnchorEnd ?? selection.end;

        if (currBase < anchorStart) {
          // Extending upstream: move start to clicked position, keep anchor end
          newStart = currBase;
          newEnd = anchorEnd;
        } else if (currBase > anchorEnd) {
          // Extending downstream: keep anchor start, move end to clicked position
          newStart = anchorStart;
          newEnd = currBase;
        } else {
          // Clicked within anchor range - shrink selection to point
          newStart = currBase;
          newEnd = currBase;
        }
      } else {
        // Normal click - set new anchor range (single point)
        this.setAnchorRange(currBase, currBase);
      }

      this.setSelection(
        {
          ...defaultSelection,
          clockwise: true,
          end: newEnd,
          start: newStart,
          type: "SEQ",
        },
        true,
      );
      // Don't start drag event for shift+click - it's a one-shot selection extension
      // Starting a drag would cause mousemove to overwrite the selection with stale context values
      if (!e.shiftKey) {
        this.dragEvent = true;
      }
    } else if (this.dragEvent && currBase !== null) {
      // continue a drag event that's currently happening
      this.setSelection({
        ...defaultSelection,
        clockwise: clockwiseDrag,
        end: currBase,
        start: selection.start,
        type: "SEQ",
      });
    }
  };

  /**
   * Handle a sequence selection event on the circular viewer
   */
  handleCircularSeqEvent = (e: SeqVizMouseEvent) => {
    const { seq, setCentralIndex } = this.props;
    const selection = this.context;

    const { start } = selection;
    let { clockwise, end } = selection;

    const currBase = this.calculateBaseCircular(e);
    const seqLength = seq.length;

    if (e.type === "mousedown") {
      // Handle shift+click to extend selection using same logic as annotations
      if (e.shiftKey && selection.start !== undefined && selection.end !== undefined) {
        // Use handleShiftClickExtend for consistent shortest-path behavior
        if (this.handleShiftClickExtend(e, currBase, currBase, "CIRCULAR")) {
          return;
        }
      }

      // Normal click - set new anchor and start drag
      const lookahead = this.calcSelectionLength(currBase, currBase, true);
      this.selectionStarted = lookahead > 0;
      this.resetCircleDragVars(currBase);
      setCentralIndex?.("LINEAR", currBase);

      this.setAnchorRange(currBase, currBase);

      this.setSelection({
        ...defaultSelection,
        clockwise: clockwise,
        end: currBase,
        ref: "",
        start: currBase,
        type: "SEQ",
      });
    } else if (
      e.type === "mousemove" &&
      this.dragEvent &&
      currBase &&
      this.previousBase &&
      currBase !== this.previousBase
    ) {
      const increased = currBase > this.previousBase; // bases increased
      const changeThreshold = seqLength * 0.9; // threshold for unrealistic change by mouse movement
      const change = Math.abs(this.previousBase - currBase); // index change from this mouse movement
      const crossedZero = change > changeThreshold; // zero was crossed if base jumped more than changeThreshold
      this.forward = increased ? !crossedZero : crossedZero; // bases increased XOR crossed zero
      const lengthChange = crossedZero ? seqLength - change : change; // the change at the point where we cross zero has to be normalized by seqLength
      let sameDirectionMove = this.forward === selection.clockwise || selection.clockwise === null; // moving in same direction as start of drag or start of drag

      if (sameDirectionMove) {
        this.fullSelectionLength += lengthChange;
      } else {
        this.fullSelectionLength -= lengthChange;
      }

      this.previousBase = currBase; // done comparing with previous base, update previous base
      if (this.fullSelectionLength < seqLength * 0.01 && !this.shiftSelection) {
        clockwise = this.forward; // near selection start so selection direction is up for grabs
        const check = this.calcSelectionLength(selection.start || 0, currBase, this.forward); // check actual current selection length
        if (this.fullSelectionLength < 0) {
          // This is to correct for errors when dragging too fast
          this.fullSelectionLength = check;
        }
        if (check > this.fullSelectionLength) {
          // the actual selection length being greater than additive selection
          // length means we have come back to start and want to go in opposite direction
          clockwise = !this.forward;
        }
        end = currBase;
      }
      sameDirectionMove = this.forward === selection.clockwise; // recalculate this in case we've switched selection directionality

      // check the selection length, this is agnostic to the ALL reference and
      // will always calculate from where you cursor is to the start of selection
      const check = this.calcSelectionLength(selection.start || 0, currBase, selection.clockwise || true);

      if (this.selectionStarted && this.shiftSelection && check > this.fullSelectionLength) {
        this.fullSelectionLength = check; // shift select catch up
      }

      // there is an ongoing drag in the same direction as the direction the selection started in
      const sameDirectionDrag = this.dragEvent && sameDirectionMove;
      const fullSelection = false; // selection is full sequence

      // TODO: fix const fullSelection = currRef === "ALL"; // selection is full sequence
      const hitFullSelection = !fullSelection && this.fullSelectionLength >= seqLength; // selection became full sequence
      if (sameDirectionDrag && hitFullSelection) {
        end = start;
      } else if (fullSelection) {
        // this ensures that backtracking doesn't require making up to your overshoot forward circles
        this.fullSelectionLength = seqLength + (this.fullSelectionLength % seqLength);

        if (
          !sameDirectionDrag && // changed direction
          check === this.fullSelectionLength - seqLength && // back tracking
          check > seqLength * 0.9 // passed selection start
        ) {
          end = currBase; // start decreasing selection size due to backtracking

          // reset calculated additive selection length to normal now that we are not at ALL length
          this.fullSelectionLength = this.fullSelectionLength - seqLength;
        }
      } else {
        end = currBase; // nothing special just update the selection
      }
      this.shiftSelection = false;

      this.setSelection({
        ...defaultSelection,
        clockwise: clockwise,
        end: end,
        start: start,
        type: "SEQ",
      });
    }
  };

  /**
   * in a linear sequence viewer, given the bounding box of a component, the basepairs
   * by SeqBlock and the position of the mouse event, find the current base
   */
  calculateBaseLinear = (e: SeqVizMouseEvent, knownRange: { end: number; start: number }) => {
    const { bpsPerBlock } = this.props;

    const block = e.currentTarget.getBoundingClientRect();
    const distFromLeft: number = e.clientX - block.left;
    const ratioFromLeft = distFromLeft / block.width;
    const bpsFromLeft = Math.round(ratioFromLeft * (bpsPerBlock as number));

    return Math.min(knownRange.start + bpsFromLeft, knownRange.end);
  };

  /**
   * in a circular plasmid viewer, given the center of the viewer, and position of the
   * mouse event, find the currently hovered or clicked basepair
   */
  calculateBaseCircular = (e: SeqVizMouseEvent) => {
    const { center, centralIndex, seq, yDiff } = this.props;

    if (!center) return 0;

    const block = e.currentTarget.getBoundingClientRect();

    // position on the plasmid viewer
    const distFromLeft = e.clientX - block.left;
    const distFromTop = e.clientY - block.top;

    // position relative to center
    const x = distFromLeft - center.x;
    const y = distFromTop - (center.y + (yDiff as number));

    const riseToRun = y / x;
    const posInRads = Math.atan(riseToRun);
    let posInDeg = posInRads * (180 / Math.PI) + 90; // convert and shift to vertical is 0
    if (x < 0) {
      posInDeg += 180; // left half of the viewer
    }
    const posInPerc = posInDeg / 360; // position as a percentage

    let currBase = Math.round(seq.length * posInPerc); // account for rotation of the viewer
    currBase += centralIndex as number;
    if (currBase > seq.length) {
      currBase -= seq.length;
    }
    return currBase;
  };

  /**
   * Update the selection in state. Only update the specified
   * properties of the selection that should be updated.
   */
  setSelection = (newSelection: Selection, force = false) => {
    const selection = this.context;
    const { setSelection } = this.props;

    if (
      newSelection.start === selection.start &&
      newSelection.end === selection.end &&
      newSelection.ref === selection.ref &&
      // to support re-clicking the annotation and causing it to fire a la gh issue https://github.com/Lattice-Automation/seqviz/issues/142
      ["SEQ", "AMINOACID", ""].includes(newSelection.type || "")
    ) {
      return;
    }
    const { clockwise, end, name, ref, start, type }: any = {
      ...selection,
      ...newSelection,
    };

    const length = this.calcSelectionLength(start, end, clockwise);

    setSelection(
      {
        clockwise,
        end,
        length,
        name,
        ref,
        start,
        type,
      },
      force,
    );
  };

  /**
   * Check what the length of the selection is in circle drag select
   */
  calcSelectionLength = (start: number, base: number, clock: boolean | null) => {
    const { seq } = this.props;
    if (base < start && !clock) {
      return start - base;
    }
    if (base > start && !clock) {
      return start + (seq.length - base);
    }
    if (base > start && clock) {
      return base - start;
    }
    if (base < start && clock) {
      return seq.length - start + base;
    }
    return 0;
  };

  /**
   * Calculate the shortest union arc that includes both ranges on a circular sequence.
   * Returns the start, end, and direction of the union arc.
   */
  calcCircularUnion = (
    anchorStart: number,
    anchorEnd: number,
    clickedStart: number,
    clickedEnd: number,
    seqLength: number,
  ): { clockwise: boolean; end: number; start: number } => {
    // Helper to check if a point is within a clockwise arc from start to end
    const inClockwiseArc = (point: number, start: number, end: number): boolean => {
      if (start <= end) {
        return point >= start && point <= end;
      } else {
        // Arc wraps around origin
        return point >= start || point <= end;
      }
    };

    // Calculate arc length for clockwise arc from start to end
    const arcLength = (start: number, end: number): number => {
      return end >= start ? end - start : seqLength - start + end;
    };

    // Two candidate union arcs:
    // Arc 1: Clockwise from anchorStart to clickedEnd
    // Arc 2: Clockwise from clickedStart to anchorEnd

    const arc1Len = arcLength(anchorStart, clickedEnd);
    const arc2Len = arcLength(clickedStart, anchorEnd);

    // Check which arcs include all four endpoints (and thus both full ranges)
    const arc1Valid =
      inClockwiseArc(anchorEnd, anchorStart, clickedEnd) && inClockwiseArc(clickedStart, anchorStart, clickedEnd);

    const arc2Valid =
      inClockwiseArc(anchorStart, clickedStart, anchorEnd) && inClockwiseArc(clickedEnd, clickedStart, anchorEnd);

    // Pick the shortest valid arc
    if (arc1Valid && (!arc2Valid || arc1Len <= arc2Len)) {
      return { clockwise: true, end: clickedEnd, start: anchorStart };
    } else if (arc2Valid) {
      return { clockwise: true, end: anchorEnd, start: clickedStart };
    } else {
      // Fallback - use simple min/max (shouldn't happen for valid ranges)
      return {
        clockwise: true,
        end: Math.max(anchorEnd, clickedEnd),
        start: Math.min(anchorStart, clickedStart),
      };
    }
  };

  render() {
    return this.props.children(this.inputRef, this.mouseEvent, this.removeMountedBlock);
  }
}
