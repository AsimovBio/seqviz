import * as React from "react";
import { Annotation } from "../../../part";
import { SearchResult } from "../../../utils/search";
import { ICutSite, ISize, InputRefFuncType, Primer } from "../../common";
import { SeqVizSelection } from "../../handlers/selection";
import { HighlightRegion } from "./LinearFind";
import { Translation } from "./Translations";
export declare type FindXAndWidthType = (n1: number | undefined, n2?: number) => {
    x: number;
    width: number;
};
interface SeqBlockProps {
    annotationRows: Annotation[][];
    blockHeight: number;
    bpColors: string[];
    bpsPerBlock: number;
    charWidth: number;
    compSeq: string;
    cutSiteRows: ICutSite[];
    elementHeight: number;
    firstBase: number;
    forwardPrimerRows: Primer[];
    fullSeq: string;
    id: string;
    inputRef: InputRefFuncType;
    key: string;
    lineHeight: number;
    mouseEvent: React.MouseEventHandler<SVGSVGElement>;
    onUnmount: (a: string) => void;
    reversePrimerRows: Primer[];
    searchRows: SearchResult[];
    selection: SeqVizSelection;
    selectionColors: {
        block: string;
        edge: string;
    };
    seq: string;
    seqFontSize: number;
    showComplement: boolean;
    showIndex: boolean;
    showPrimers: boolean;
    size: ISize;
    translations: Translation[];
    y: number;
    zoom: {
        linear: number;
    };
    zoomed: boolean;
    highlightedRegions: HighlightRegion[];
}
/**
 * SeqBlock
 *
 * Comprised of:
 * 	   IndexRow (the x axis basepair index)
 * 	   AnnotationRow (annotations)
 * 	   Selection (cursor selection range)
 * 	   Find (regions that match the users current find search)
 *
 * a single block of linear sequence. Essentially a row that holds
 * the sequence, and flair around it including the
 * complementary sequence, sequence index, and anotations *
 */
export default class SeqBlock extends React.PureComponent<SeqBlockProps> {
    static defaultProps: {};
    componentWillUnmount: () => void;
    /**
     * findXAndWidth
     *
     * a helper method that's used in several of the child components to figure
     * out how far from the left the element is and how wide it should be
    
     */
    findXAndWidth: FindXAndWidthType;
    /**
     * Given a bp, return either the bp as was, or a text span if it should have a color
     *
     * We're looking up each bp in the props.bpColors map to see if it should
     * be shadded and, if so, wrapping it in a textSpan
     */
    seqTextSpan: (bp: string, i: number) => JSX.Element;
    /**
     * Lookup a bp in the bpColors prop and return the color
     * associated with the character, if one exists. Store the results
     */
    bpColorLookup: (bp: string, i: number) => any;
    render(): JSX.Element | null;
}
export {};
