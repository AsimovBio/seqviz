import { Part } from "../part";
export interface FileOptions {
    fileName?: string;
    colors?: string[];
    backbone?: string | {
        name: string;
        backbone: string;
    };
}
/**
 * filesToParts can convert either string contents of
 * DNA files or a list of File objects into SeqViz parts
 */
declare const _default: (files: string | string[] | File | File[], options?: FileOptions) => Promise<Part[]>;
export default _default;
