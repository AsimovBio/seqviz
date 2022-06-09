import * as React from "react";
import { InputRefFuncType } from "../../common";
import { SeqVizSelection } from "../../handlers/selection";
import { FindXAndWidthType } from "./SeqBlock";
interface EdgesProps {
    findXAndWidth: FindXAndWidthType;
    selectEdgeHeight: number;
    selectionColors: {
        block: string;
        edge: string;
    };
    firstBase: number;
    lastBase: number;
    fullSeq: string;
}
/**
 * Edges on the side of selections of the Selection Viewer
 *
 * Only shown at the selection's start and end, not intermediate blocks
 * (if there are intermediate blocks)
 */
export declare class Edges extends React.PureComponent<EdgesProps> {
    static contextType: React.Context<SeqVizSelection>;
    id: string;
    render(): JSX.Element | null;
}
interface BlockProps {
    findXAndWidth: FindXAndWidthType;
    selectHeight: number;
    firstBase: number;
    lastBase: number;
    fullSeq: string;
    selection: SeqVizSelection;
    selectionColors: {
        block: string;
        edge: string;
    };
    inputRef: InputRefFuncType;
    onUnmount: (a: string) => void;
}
export declare class Block extends React.PureComponent<BlockProps> {
    static contextType: React.Context<SeqVizSelection>;
    id: string;
    render(): JSX.Element | null;
}
declare const _default: {
    Edges: typeof Edges;
    Block: typeof Block;
};
export default _default;
