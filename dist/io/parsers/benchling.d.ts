/**
 * Benchling presents the easiest format to parse, because their JSON
 * format is very close to our own
 */
declare const _default: (text: any) => Promise<{
    name: any;
    date: number;
    seq: string;
    compSeq: string;
    annotations: any;
    tags: never[];
    primers: never[];
    cutSites: never[];
    note: string;
    source: {
        name: string;
        file: string;
    };
}[]>;
export default _default;
