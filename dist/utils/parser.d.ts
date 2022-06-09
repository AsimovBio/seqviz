/**
 * returns an object with sequence and complement sequence as strings
 *
 * Takes in a sequence "seqInput" and returns an object with fields
 * seq and compSeq (done because some input base pairs might not make
 * sense and should be filtered out)
 */
/**
 * return the filtered sequence and its complement
 * if its an empty string, return the same for both
 */
export declare const dnaComplement: (origSeq: string) => {
    seq: string;
    compSeq: string;
};
/**
 * Return the reverse complement of a DNA sequence
 */
export declare const reverseComplement: (inputSeq: any) => string;
export declare const extractDate: (data: any) => number;
export declare const firstElement: (arr: any) => any;
/**
 * Parse the user defined direction, estimate the direction of the element
 *
 * ```js
 * directionality("FWD") => 1
 * directionality("FORWARD") => 1
 * directionaltiy("NONSENSE") => 0
 * ```
 *
 
 */
export declare const directionality: (direction: any) => 0 | 1 | -1;
export declare const partFactory: () => {
    name: string;
    date: number;
    seq: string;
    compSeq: string;
    tags: never[];
    annotations: never[];
    primers: never[];
    cutSites: never[];
    note: string;
    source: {
        name: string;
        file: string;
    };
};
