import * as React from "react";
import SeqViz from "./SeqViz/SeqViz";
/**
 * Export a React component directly for React-based development
 */
/**
 * Export a part, pUC, for development
 */
export { default as pUC } from "./parts/pUC";
export { SeqViz };
/**
 * Return a Viewer object with three properties:
 *  - `render` to an HTML element
 *  - `setState(options)` to update the viewer's internal state
 *  - `renderToString` to return an HTML representation of the Viewer
 */
export declare const Viewer: (element: string | HTMLElement | undefined, options: any) => {
    render: () => React.DetailedReactHTMLElement<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
    renderToString: () => string;
    setState: (state: any) => React.DetailedReactHTMLElement<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
};
