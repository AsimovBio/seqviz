import * as React from "react";
import { Annotation } from "../../../part";
import { InputRefFuncType } from "../../common";
import { FindXAndWidthType } from "./SeqBlock";
interface AnnotationRowsProps {
    annotationRows: Annotation[][];
    yDiff: number;
    findXAndWidth: FindXAndWidthType;
    inputRef: InputRefFuncType;
    seqBlockRef: unknown;
    firstBase: number;
    lastBase: number;
    fullSeq: string;
    elementHeight: number;
    bpsPerBlock: number;
}
export declare class AnnotationRows extends React.PureComponent<AnnotationRowsProps> {
    render(): JSX.Element;
}
export {};
