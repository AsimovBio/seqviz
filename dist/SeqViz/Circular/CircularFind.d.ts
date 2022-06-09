import { SearchResult } from "../../utils/search";
import { HighlightRegion } from "../Linear/SeqBlock/LinearFind";
import { Coor, InputRefFuncType } from "../common";
interface CircularFindProps {
    search: SearchResult[];
    radius: number;
    center: Coor;
    lineHeight: number;
    seqLength: number;
    findCoor: (index: number, radius: number, rotate?: boolean) => Coor;
    getRotation: (index: number) => string;
    generateArc: (args: {
        innerRadius: number;
        outerRadius: number;
        length: number;
        largeArc: boolean;
        sweepFWD?: boolean;
        arrowFWD?: boolean;
        arrowREV?: boolean;
        offset?: number;
    }) => string;
    rotateCoor: (coor: Coor, degrees: number) => Coor;
    inputRef: InputRefFuncType;
    onUnmount: unknown;
    totalRows: number;
    seq: string;
    highlightedRegions: HighlightRegion[];
}
export declare const CircularFind: (props: CircularFindProps) => JSX.Element;
/**
 * Create an SVG `path` element that highlights the search result
 */
export declare const CircularFindArc: (props: {
    radius: number;
    lineHeight: number;
    seqLength: number;
    start: number;
    end: number;
    getRotation: (index: number) => string;
    generateArc: (args: {
        innerRadius: number;
        outerRadius: number;
        length: number;
        largeArc: boolean;
        sweepFWD?: boolean;
        arrowFWD?: boolean;
        arrowREV?: boolean;
        offset?: number;
    }) => string;
    inputRef: InputRefFuncType;
    direction: -1 | 1;
    fillStyle: string;
}) => JSX.Element;
export {};
