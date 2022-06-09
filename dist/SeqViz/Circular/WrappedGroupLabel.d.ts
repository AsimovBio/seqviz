import * as React from "react";
/**
 * a component that groups several other labels together so they're all viewable at once
 */
export default class WrappedGroupLabel extends React.Component {
    /**
     * given the currently active annotation block, with multiple annotations and enzymes,
     * render each in a single "block", which is a g element with a rect "containing" the
     * names. This is slightly tricky because we can't put the text elements inside
     * the rect as though it were a div and have them fill it. instead, we must calculate
     * the height and width of the resulting annotaiton block
     */
    render(): JSX.Element;
}
