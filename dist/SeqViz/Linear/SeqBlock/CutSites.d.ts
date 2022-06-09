import { ICutSite, InputRefFuncType } from "../../common";
import { FindXAndWidthType } from "./SeqBlock";
/**
 * CutSites
 *
 * a component shown above the sequence viewer that shows the name of the
 * enzyme that has a cut-site within the sequence and a line for the resulting cutsite
 */
declare const CutSites: (props: {
    zoom: {
        linear: number;
    };
    cutSiteRows: ICutSite[];
    findXAndWidth: FindXAndWidthType;
    lineHeight: number;
    firstBase: number;
    lastBase: number;
    inputRef: InputRefFuncType;
    yDiff: number;
}) => JSX.Element | null;
export default CutSites;
