import { ICutSite, IEnzyme } from "../SeqViz/common";
/**
 * cutSitesInRows
 *
 * for the list of the enzymes, find their cut sites and split them into rows compatible
 * with the sequence viewer
 *
 */
export declare const cutSitesInRows: (seq: string, enzymeList: string[], enzymesCustom: {
    [key: string]: IEnzyme;
}) => ICutSite[];
/**
 * digest
 *
 * Cuts a part with the list of enzymes, and returns a new list of
 * parts after digestion
 *
 
 
 
 */
export declare const digest: (enzymeNames: any, part: any) => any;
