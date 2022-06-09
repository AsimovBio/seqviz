import * as React from "react";
declare type SelectionTypeEnum = "ANNOTATION" | "PRIMER" | "FIND" | "TRANSLATION" | "ENZYME" | "SEQ" | "AMINOACID" | "";
export interface SeqVizSelection {
    name: string;
    type: SelectionTypeEnum;
    seq: string;
    gc: number;
    tm: number;
    start: number;
    end: number;
    length: number;
    clockwise: boolean;
    direction?: number;
    color?: string;
    ref: null | string;
}
/** Initial/default selection */
export declare const defaultSelection: SeqVizSelection;
/** Default context object */
export declare const SelectionContext: React.Context<SeqVizSelection>;
export declare type SeqVizMouseEvent = React.MouseEvent & {
    target: {
        id: string;
    };
};
declare const _default: (WrappedComp: React.ComponentType<any>) => {
    new (props: {} | Readonly<{}>): {
        state: {
            name: string;
            type: SelectionTypeEnum;
            seq: string;
            gc: number;
            tm: number;
            start: number;
            end: number;
            length: number;
            clockwise: boolean;
            direction?: number | undefined;
            color?: string | undefined;
            ref: string | null;
        };
        /**
         * a map between the id of child elements and their associated SelectRanges
         * @type {Object.<string, SelectRange>}
         */
        idToRange: Map<any, any>;
        previousBase: number | null;
        forward: null;
        fullSelectionLength: number;
        dragEvent: boolean;
        selectionStarted: boolean;
        shiftSelection: boolean;
        lastClick: number;
        componentDidMount: () => void;
        componentWillUnmount: () => void;
        componentDidUpdate: () => void;
        /** Stop the current drag event from happening */
        stopDrag: () => void;
        /**
         * Called at start of drag to make sure checkers are reset to default state
         */
        resetCircleDragVars: (start: number | null) => void;
        /**
         * a ref callback for mapping the id of child to its SelectRange
         * it stores the id of all elements
         * @param  {string} ref element's id, as it appears in DOM
         * @param  {SelectRange} selectRange
         */
        inputRef: (ref: unknown, selectRange: object) => void;
        /**
         * remove the id of the passed element from the list of tracked refs
         */
        removeMountedBlock: (ref: unknown) => void;
        /**
         * mouseEvent
         *
         * the selected child element is something that is known by reference.
         * update its SeqBlock's range (or any others affected) with the newly
         * active range
         *
         */
        mouseEvent: (e: SeqVizMouseEvent) => void;
        /**
         * Handle a sequence selection on a linear viewer
         */
        linearSeqEvent: (e: SeqVizMouseEvent, knownRange: {
            start: number;
            end: number;
        }) => void;
        /**
         * Handle a sequence selection event on the circular viewer
         */
        circularSeqEvent: (e: SeqVizMouseEvent) => void;
        /**
         * in a linear sequence viewer, given the bounding box of a component, the basepairs
         * by SeqBlock and the position of the mouse event, find the current base
         *
         */
        calculateBaseLinear: (e: SeqVizMouseEvent, knownRange: {
            start: number;
            end: number;
        }) => number;
        /**
         * in a circular plasmid viewer, given the center of the viewer, and position of the
         * mouse event, find the currently hovered or clicked basepair
         *
         */
        calculateBaseCircular: (e: SeqVizMouseEvent) => number;
        /**
         * Update the selection in state. Only update the specified
         * properties of the selection that should be updated.
         */
        setSelection: (newSelection: SeqVizSelection) => void;
        /**
         * Return the string subsequence from the range' start to end
         */
        getSelectedSequence: (start: number, end: number, clock: number) => any;
        /**
         * Check what the length of the selection is in circle drag select
         */
        calcSelectionLength: (start: number, base: number, clock: boolean | null) => number;
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<{}>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void; /**
         * Check what the length of the selection is in circle drag select
         */
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<{}> & Readonly<{
            children?: React.ReactNode;
        }>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        shouldComponentUpdate?(nextProps: Readonly<{}>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<{}>, prevState: Readonly<{}>): any;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<{}>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<{}>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<{}>, nextState: Readonly<{}>, nextContext: any): void;
    };
    new (props: {}, context: any): {
        state: {
            name: string;
            type: SelectionTypeEnum;
            seq: string;
            gc: number;
            tm: number;
            start: number;
            end: number;
            length: number;
            clockwise: boolean;
            direction?: number | undefined;
            color?: string | undefined;
            ref: string | null;
        };
        /**
         * a map between the id of child elements and their associated SelectRanges
         * @type {Object.<string, SelectRange>}
         */
        idToRange: Map<any, any>;
        previousBase: number | null;
        forward: null;
        fullSelectionLength: number;
        dragEvent: boolean;
        selectionStarted: boolean;
        shiftSelection: boolean;
        lastClick: number;
        componentDidMount: () => void;
        componentWillUnmount: () => void;
        componentDidUpdate: () => void;
        /** Stop the current drag event from happening */
        stopDrag: () => void;
        /**
         * Called at start of drag to make sure checkers are reset to default state
         */
        resetCircleDragVars: (start: number | null) => void;
        /**
         * a ref callback for mapping the id of child to its SelectRange
         * it stores the id of all elements
         * @param  {string} ref element's id, as it appears in DOM
         * @param  {SelectRange} selectRange
         */
        inputRef: (ref: unknown, selectRange: object) => void;
        /**
         * remove the id of the passed element from the list of tracked refs
         */
        removeMountedBlock: (ref: unknown) => void;
        /**
         * mouseEvent
         *
         * the selected child element is something that is known by reference.
         * update its SeqBlock's range (or any others affected) with the newly
         * active range
         *
         */
        mouseEvent: (e: SeqVizMouseEvent) => void;
        /**
         * Handle a sequence selection on a linear viewer
         */
        linearSeqEvent: (e: SeqVizMouseEvent, knownRange: {
            start: number;
            end: number;
        }) => void;
        /**
         * Handle a sequence selection event on the circular viewer
         */
        circularSeqEvent: (e: SeqVizMouseEvent) => void;
        /**
         * in a linear sequence viewer, given the bounding box of a component, the basepairs
         * by SeqBlock and the position of the mouse event, find the current base
         *
         */
        calculateBaseLinear: (e: SeqVizMouseEvent, knownRange: {
            start: number;
            end: number;
        }) => number;
        /**
         * in a circular plasmid viewer, given the center of the viewer, and position of the
         * mouse event, find the currently hovered or clicked basepair
         *
         */
        calculateBaseCircular: (e: SeqVizMouseEvent) => number;
        /**
         * Update the selection in state. Only update the specified
         * properties of the selection that should be updated.
         */
        setSelection: (newSelection: SeqVizSelection) => void;
        /**
         * Return the string subsequence from the range' start to end
         */
        getSelectedSequence: (start: number, end: number, clock: number) => any;
        /**
         * Check what the length of the selection is in circle drag select
         */
        calcSelectionLength: (start: number, base: number, clock: boolean | null) => number;
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<{}>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void; /**
         * Check what the length of the selection is in circle drag select
         */
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<{}> & Readonly<{
            children?: React.ReactNode;
        }>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        shouldComponentUpdate?(nextProps: Readonly<{}>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<{}>, prevState: Readonly<{}>): any;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<{}>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<{}>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<{}>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType?: React.Context<any> | undefined;
};
export default _default;
