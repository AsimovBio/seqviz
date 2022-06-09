import { Annotation } from "../part";
import { Primer } from "./common";
/**
 * stackElements
 *
 * take an array of elements (a one deep array) and create an array of
 * array of annotations, where non-overlapping annotations can be in the same
 * row. Example:
 *
 * input (one array):
 * 		[ ---Ann---	---Ann3---
 * 			 ---Ann2--- ]
 *
 * output (array of array):
 * 		[ ---Ann--- ---Ann3---]
 * 		[		---Ann2---    ]
 *
 */
export declare const stackElements: (elements: Annotation[] | Primer[], seqL: number) => Primer[][] | Annotation[][];
/**
 * given an array of arrays of an element, fragment the element into seq blocks
 *
 * this is needed in the Linear sequence viewer because it's easier to send only the
 * relevant elements to the childSeqBlock, rather to send every SeqBlock everything
 * and have the block figure out whether element is included within it
 *
 * NOTE: if an element has a start and end index that are the same, it's assumed to
 * cover the entire plasmid
 *
 */
export declare const createMultiRows: (elements: any, rowLength: any, rowCount: any) => any[];
/**
 * search thru the map w/ the given interval finding all relevant
 * annotations/ORFs/etc by finding the appropriate start and end range
 * using Math.floor
 *
 */
export declare const createSingleRows: (elements: any, rowLength: any, rowCount: any, duplicateIdsAllowed?: boolean) => any[];
