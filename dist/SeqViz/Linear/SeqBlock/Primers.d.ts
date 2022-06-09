import * as React from "react";
import { InputRefFuncType, Primer } from "../../common";
import { FindXAndWidthType } from "./SeqBlock";
interface PrimerRowsProps {
    charWidth: number;
    direction: 1 | -1;
    findXAndWidth: FindXAndWidthType;
    firstBase: number;
    fontSize: number;
    forwardPrimerRows: Primer[];
    fullSeq: string;
    inputRef: InputRefFuncType;
    lastBase: number;
    onUnmount: (a: unknown) => void;
    reversePrimerRows: Primer[];
    seqBlockRef: unknown;
    showPrimers: boolean;
    yDiff: number;
    zoomed: boolean;
    elementHeight: number;
}
export default class PrimerRows extends React.PureComponent<PrimerRowsProps> {
    render(): JSX.Element | null;
}
export {};
