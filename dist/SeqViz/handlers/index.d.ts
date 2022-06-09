/**
 * sequentially apply all the Sequence Viewer HOCs
 *
 * this is just merging the HOCs into a single function to simplfy appling
 * them to the Circular and Linear viewers (one function rather than 4 (or however many there are))
 */
declare const _default: (WrappedViewer: any) => {
    new (props: {} | Readonly<{}>): {
        state: {
            name: string;
            type: "" | "ANNOTATION" | "PRIMER" | "FIND" | "TRANSLATION" | "ENZYME" | "SEQ" | "AMINOACID";
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
        stopDrag: () => void;
        resetCircleDragVars: (start: number | null) => void;
        inputRef: (ref: unknown, selectRange: object) => void;
        removeMountedBlock: (ref: unknown) => void;
        mouseEvent: (e: import("./selection").SeqVizMouseEvent) => void;
        linearSeqEvent: (e: import("./selection").SeqVizMouseEvent, knownRange: {
            start: number;
            end: number;
        }) => void;
        circularSeqEvent: (e: import("./selection").SeqVizMouseEvent) => void;
        calculateBaseLinear: (e: import("./selection").SeqVizMouseEvent, knownRange: {
            start: number;
            end: number;
        }) => number;
        calculateBaseCircular: (e: import("./selection").SeqVizMouseEvent) => number;
        setSelection: (newSelection: import("./selection").SeqVizSelection) => void;
        getSelectedSequence: (start: number, end: number, clock: number) => any;
        calcSelectionLength: (start: number, base: number, clock: boolean | null) => number;
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<{}>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<{}> & Readonly<{
            children?: import("react").ReactNode;
        }>;
        refs: {
            [key: string]: import("react").ReactInstance;
        };
        shouldComponentUpdate?(nextProps: Readonly<{}>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
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
            type: "" | "ANNOTATION" | "PRIMER" | "FIND" | "TRANSLATION" | "ENZYME" | "SEQ" | "AMINOACID";
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
        stopDrag: () => void;
        resetCircleDragVars: (start: number | null) => void;
        inputRef: (ref: unknown, selectRange: object) => void;
        removeMountedBlock: (ref: unknown) => void;
        mouseEvent: (e: import("./selection").SeqVizMouseEvent) => void;
        linearSeqEvent: (e: import("./selection").SeqVizMouseEvent, knownRange: {
            start: number;
            end: number;
        }) => void;
        circularSeqEvent: (e: import("./selection").SeqVizMouseEvent) => void;
        calculateBaseLinear: (e: import("./selection").SeqVizMouseEvent, knownRange: {
            start: number;
            end: number;
        }) => number;
        calculateBaseCircular: (e: import("./selection").SeqVizMouseEvent) => number;
        setSelection: (newSelection: import("./selection").SeqVizSelection) => void;
        getSelectedSequence: (start: number, end: number, clock: number) => any;
        calcSelectionLength: (start: number, base: number, clock: boolean | null) => number;
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<{}>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<{}> & Readonly<{
            children?: import("react").ReactNode;
        }>;
        refs: {
            [key: string]: import("react").ReactInstance;
        };
        shouldComponentUpdate?(nextProps: Readonly<{}>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<{}>, prevState: Readonly<{}>): any;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<{}>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<{}>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<{}>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType?: import("react").Context<any> | undefined;
};
export default _default;
