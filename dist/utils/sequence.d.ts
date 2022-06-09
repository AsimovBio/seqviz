export declare type SeqType = "dna" | "rna" | "aa" | "unknown";
/**
 * Map of nucleotide bases
 */
export declare const nucleotides: {
    a: string;
    c: string;
    t: string;
    g: string;
    u: string;
};
/**
 * Map of common nucleotide wildcards to their translations
 */
export declare const nucleotideWildCards: {
    y: {
        c: string;
        t: string;
    };
    r: {
        a: string;
        g: string;
    };
    w: {
        a: string;
        t: string;
    };
    s: {
        g: string;
        c: string;
    };
    k: {
        t: string;
        g: string;
    };
    m: {
        c: string;
        a: string;
    };
    d: {
        a: string;
        g: string;
        t: string;
    };
    v: {
        a: string;
        c: string;
        g: string;
    };
    h: {
        a: string;
        c: string;
        t: string;
    };
    b: {
        c: string;
        g: string;
        t: string;
    };
    x: {
        a: string;
        c: string;
        g: string;
        t: string;
    };
    n: {
        a: string;
        c: string;
        g: string;
        t: string;
    };
};
/**
 * Infer type of a sequence
 */
export declare const getSeqType: (seq: string) => SeqType;
/**
 * Translate common nucleotide wildcards
 *
 * Search string sequence for nucleotide wildcards
 * and replace with proper regex
 */
export declare const translateWildNucleotides: (seq: string) => string;
/**
 * Find the mismatches
 */
export declare const getMismatchIndices: (sequence: string, match: string) => number[];
/**
 * Combine sequential indices into ranges
 */
export declare const returnRanges: (indices: number[]) => number[][];
/**
 * Calculate the GC% of a sequence
 */
export declare const calcGC: (seq: string) => number;
/**
 * Calculate the melting temp for a given sequence
 */
export declare const calcTm: (seq: string, match?: string) => number;
/**
 * Calculate the length of a sequence
 */
export declare const calcLength: (start: number, end: number, seqLength: number) => number;
/**
 * Reverses a string sequence
 */
export declare const reverse: (seq: string) => string;
export declare const annotationFactory: (i?: number, colors?: string[]) => {
    id: string;
    color: string;
    name: string;
    type: string;
    start: number;
    end: number;
    direction: string;
};
export declare const primerFactory: () => {
    overhang: string;
    name: string;
    id: string;
    complementId: string;
    gc: number;
    tm: number;
    any: number;
    dimer: number;
    hairpin: number;
    stability: number;
    penalty: number;
    vector: string;
    sequence: string;
    strict: boolean;
};
/**
 * translateDNA
 *
 * given a sequence of DNA, translate it into an AMINO ACID sequence
 */
export declare const translateDNA: (seqInput: string) => string;
/**
 * createLinearTranslations
 *
 * a function used by SeqViewer/Circular to take a "translation", as it's stored
 * in the DB (just a start and end point referencing the part sequence) and convert
 * that into elements that are useful for the SeqBlocks
 *
 * the seqBlocks need, at a minimum, to know the direction of the translation, the
 * amino acids relevant to their seqBlock, and the start and end point of the translation
 *
 * the actual start and end point of the translation will usually differ from that in storage,
 * because not all basepairs within the start and end point might be used within the
 * actual translation. For example, if the user selects 5 bps and makes a translation,
 * only the first 3 will be used. so the actual start is 1 and the actual end is 3 (inclusive)
 */
export declare const createLinearTranslations: (translations: any, dnaSeq: any) => any;
