import * as React from "react";
import { InputRefFuncType } from "../../common";
import { FindXAndWidthType } from "./SeqBlock";
export interface Translation {
    id: string;
    start: number;
    end: number;
    AAseq: string;
    direction: -1 | 1;
}
interface TranslationRowsProps {
    bpsPerBlock: number;
    charWidth: number;
    elementHeight: number;
    findXAndWidth: FindXAndWidthType;
    firstBase: number;
    fullSeq: string;
    inputRef: InputRefFuncType;
    lastBase: number;
    onUnmount: (a: unknown) => void;
    seqBlockRef: unknown;
    translations: Translation[];
    yDiff: number;
}
export default class TranslationRows extends React.PureComponent<TranslationRowsProps> {
    render(): JSX.Element;
}
export {};
