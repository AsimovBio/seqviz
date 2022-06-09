/**
 * takes an ab1 file as a binary Buffer (if server) or ArrayBuffer (if client)
 *
 * details on the schema of an AB1 file are here:
 * http://www6.appliedbiosystems.com/support/software_community/ABIF_File_Format.pdf
 *
 * the js parser above was found at: https://github.com/eamitchell/ab1ToJSON/blob/master/clientside.js
 */
declare const _default: (file: any, name: any) => {
    id: string;
    name: any;
    seq: string;
    traces: {
        aTrace: never[];
        tTrace: never[];
        gTrace: never[];
        cTrace: never[];
        qualNums: never[];
    };
};
export default _default;
