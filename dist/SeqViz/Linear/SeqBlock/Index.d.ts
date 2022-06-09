import * as React from "react";
import { ISize } from "../../common";
import { FindXAndWidthType } from "./SeqBlock";
interface IndexProps {
    seq: string;
    zoom: {
        linear: number;
    };
    firstBase: number;
    lineHeight: number;
    size: ISize;
    findXAndWidth: FindXAndWidthType;
    transform: string | undefined;
    showIndex: boolean;
    lastBase: number;
}
/**
 * a basepair indexing row for tracking the location of the current bp of DNA.
 */
export default class Index extends React.PureComponent<IndexProps> {
    genTicks: () => JSX.Element[];
    render(): JSX.Element | null;
}
export {};
