import { Part } from "../part";
/**
 * retrieve a string representation of a part from a remote server and convert it into a part
 */
declare const _default: (accession: string, options?: {
    backbone?: string | undefined;
    colors?: string[] | undefined;
}) => Promise<Part>;
export default _default;
