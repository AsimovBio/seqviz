import * as React from "react";
import { ISize } from "../common";
import { SeqVizSelection } from "../handlers/selection";
interface InfiniteScrollProps {
    seqBlocks: JSX.Element[];
    blockHeights: number[];
    totalHeight: number;
    selection: SeqVizSelection;
    size: ISize;
    bpsPerBlock: number;
}
interface InfiniteScrollState {
    centralIndex: number;
    visibleBlocks: number[];
}
/**
 * A wrapper around the seqBlocks. Renders only the seqBlocks that are
 * within the range of the current dom viewerport
 *
 * This component should sense scroll events and, during one, recheck which
 * seqBlocks should currently be shown
 */
export default class InfiniteScroll extends React.PureComponent<InfiniteScrollProps, InfiniteScrollState> {
    static contextType: React.Context<{
        linear: number;
        circular: number;
        setCentralIndex: (_: number) => void;
    }>;
    /** ref to a div that's for scrolling: https://flow.org/en/docs/react/types/ */
    scroller: any;
    insideDOM: any;
    timeoutID: any;
    constructor(props: InfiniteScrollProps);
    componentDidMount: () => void;
    componentDidUpdate: (prevProps: InfiniteScrollProps, prevState: InfiniteScrollState, snapshot: any) => void;
    componentWillUnmount: () => void;
    /**
     * more info at: https://reactjs.org/docs/react-component.html#getsnapshotbeforeupdate
     */
    getSnapshotBeforeUpdate: (prevProps: InfiniteScrollProps) => {
        blockY: number;
        blockIndex: number;
    };
    scrollToIndex: (index: any) => void;
    /**
     * Scroll to centralIndex. Likely from circular clicking on an element
     * that should then be scrolled to in linear
     */
    scrollToCentralIndex: () => void;
    /**
     * the component has mounted to the DOM or updated, and the window should be scrolled downwards
     * so that the central index is visible
     */
    restoreSnapshot: (snapshot: any) => void;
    /**
     * check whether the blocks that should be visible have changed from what's in state,
     * update if so
     */
    handleScrollOrResize: () => void;
    incrementScroller: (incAmount: any) => void;
    stopIncrementingScroller: () => void;
    /**
     * handleMouseOver is for detecting when the user is performing a drag event
     * at the very top or the very bottom of DIV. If they are, this starts
     * a recursive incrementation of the DIV's scrollTop (ie an upward or downward scroll
     * event), that's only terminated by the user leaving the scroll area
     *
     * also the rate of the scrollTop is proportional to how far from the top or the
     * bottom the user is (within [-40, 0] for top, and [0, 40] for bottom)
     */
    handleMouseOver: (e: any) => void;
    render(): JSX.Element;
}
export {};
