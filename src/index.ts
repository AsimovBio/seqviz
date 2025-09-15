import Circular from "./Circular/Circular";
import Linear from "./Linear/Linear";
import SeqViz from "./SeqViz";
import enzymes from "./enzymes";

export * from "./colors";
export * from "./digest";
export * from "./elements";
export * from "./selectionContext";
export * from "./sequence";
export * from "./style";

/**
 * Export a React component directly for React-based development
 */
export { SeqViz, Linear, Circular, enzymes as Enzymes };

export default SeqViz;

export type { SeqVizProps } from "./SeqViz";

export type { CircularProps } from "./Circular/Circular";

export type { LinearProps } from "./Linear/Linear";
