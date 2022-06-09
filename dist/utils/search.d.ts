export interface SearchResult {
    start: number;
    end: number;
    direction: -1 | 1;
    index?: number;
    length?: number;
}
/**
 * Search the seq in the forward and reverse complement strands.
 * Return all matched regions. Accounts for abiguous BP encodings and allows for mismatches
 */
declare const _default: (query: string, mismatch: number, seq: string) => SearchResult[];
export default _default;
