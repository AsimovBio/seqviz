import * as React from "react";
declare const _default: (WrappedComp: any) => {
    new (props: {} | Readonly<{}>): {
        clickedOnce: null;
        clickedTwice: null;
        /** set the event router reference on this class */
        setEventRouter: (eventRouter: any) => void;
        /**
         * action handler for a keyboard keypresses.
         * Mapping logic has been abstracted to keypressMap in ./api/keypressMap.js
         *
         
         */
        handleKeyPress: (e: any) => void;
        /**
         * maps a keypress to an interaction (String)
         *
         
         
         * ["All", "Copy", "Up", "Right", "Down", "Left"]
         */
        keypressMap: (e: any) => any;
        /**
         * Respond to any of:
         * 	All: cmd + A, select all
         * 	Copy: cmd + C, copy
         * 	Up, Right, Down, Left: some directional movement of the cursor
         */
        handleSeqInteraction: (type: any) => Promise<void>;
        /**
         * Copy the current sequence selection to the user's clipboard
         */
        handleCopy: () => void;
        /**
         * select all of the sequence
         */
        selectAllHotkey: () => void;
        handleTripleClick: () => void;
        resetClicked: () => void;
        /**
         * if the contextMenu button is clicked, check whether it was clicked
         * over a noteworthy element, for which db mutations have been written.
         *
         * if it is, mutate the contextMenu to account for those potential interactions
         * and pass on the click. Otherwise, do nothing
         *
         * if it is a regular click, pass on as normal
         *
         
         */
        handleMouseEvent: (e: any) => void;
        /**
         * handle a scroll event and, if it's a CIRCULAR viewer, update the
         * current central index
         */
        handleScrollEvent: (e: any) => void;
        /** a reference used only so we can focus on the event router after mounting */
        eventRouter: any;
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<{}>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<{}> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<{}>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<{}>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<{}>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<{}>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<{}>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<{}>, nextState: Readonly<{}>, nextContext: any): void;
    };
    new (props: {}, context: any): {
        clickedOnce: null;
        clickedTwice: null;
        /** set the event router reference on this class */
        setEventRouter: (eventRouter: any) => void;
        /**
         * action handler for a keyboard keypresses.
         * Mapping logic has been abstracted to keypressMap in ./api/keypressMap.js
         *
         
         */
        handleKeyPress: (e: any) => void;
        /**
         * maps a keypress to an interaction (String)
         *
         
         
         * ["All", "Copy", "Up", "Right", "Down", "Left"]
         */
        keypressMap: (e: any) => any;
        /**
         * Respond to any of:
         * 	All: cmd + A, select all
         * 	Copy: cmd + C, copy
         * 	Up, Right, Down, Left: some directional movement of the cursor
         */
        handleSeqInteraction: (type: any) => Promise<void>;
        /**
         * Copy the current sequence selection to the user's clipboard
         */
        handleCopy: () => void;
        /**
         * select all of the sequence
         */
        selectAllHotkey: () => void;
        handleTripleClick: () => void;
        resetClicked: () => void;
        /**
         * if the contextMenu button is clicked, check whether it was clicked
         * over a noteworthy element, for which db mutations have been written.
         *
         * if it is, mutate the contextMenu to account for those potential interactions
         * and pass on the click. Otherwise, do nothing
         *
         * if it is a regular click, pass on as normal
         *
         
         */
        handleMouseEvent: (e: any) => void;
        /**
         * handle a scroll event and, if it's a CIRCULAR viewer, update the
         * current central index
         */
        handleScrollEvent: (e: any) => void;
        /** a reference used only so we can focus on the event router after mounting */
        eventRouter: any;
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<{}>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<{}> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<{}>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<{}>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<{}>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<{}>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<{}>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<{}>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<{
        linear: number;
        circular: number;
        setCentralIndex: (_: number) => void;
    }>;
};
export default _default;
