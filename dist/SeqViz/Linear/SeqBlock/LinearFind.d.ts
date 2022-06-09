import { SearchResult } from "../../../utils/search";
import { InputRefFuncType } from "../../common";
import { FindXAndWidthType } from "./SeqBlock";
export interface HighlightRegion {
    start: number;
    end: number;
    color?: string;
}
interface FindProps {
    filteredRows: SearchResult[];
    indexYDiff: number;
    compYDiff: number;
    seqBlockRef: unknown;
    inputRef: InputRefFuncType;
    findXAndWidth: FindXAndWidthType;
    firstBase: number;
    lastBase: number;
    listenerOnly: boolean;
    highlightedRegions: HighlightRegion[];
}
/**
 * Render rectangles around Search results.
 */
export default function LinearFind(props: FindProps): JSX.Element;
export declare const LinearFindBlock: (props: {
    inputRef: InputRefFuncType;
    findXAndWidth: FindXAndWidthType;
    indexYDiff: number;
    firstBase: number;
    lastBase: number;
    start: number;
    end: number;
    seqBlockRef: unknown;
    listenerOnly: boolean;
    direction: -1 | 1;
    compYDiff: number;
    fillStyle: string;
}) => JSX.Element;
export {};
