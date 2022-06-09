import * as React from "react";
import { Coor, InputRefFuncType } from "../common";
interface CircularSelectionProps {
    radius: number;
    center: Coor;
    lineHeight: number;
    seqLength: number;
    findCoor: (index: number, radius: number, rotate?: boolean) => Coor;
    getRotation: (index: number) => string;
    generateArc: (args: {
        innerRadius: number;
        outerRadius: number;
        length: number;
        largeArc: boolean;
        sweepFWD?: boolean;
        arrowFWD?: boolean;
        arrowREV?: boolean;
        offset?: number;
    }) => string;
    rotateCoor: (coor: Coor, degrees: number) => Coor;
    inputRef: InputRefFuncType;
    onUnmount: unknown;
    totalRows: number;
    seq: string;
}
/**
 * renders the selection range of the plasmid viewer
 * consists of three parts (during an active selection):
 * 		left sidebar, right sidebar and the middle selection region
 *
 * if nothing is selected, it should just be the single cursor
 * without a middle highlighted region
 */
export default class CircularSelection extends React.PureComponent<CircularSelectionProps> {
    static contextType: React.Context<import("../handlers/selection").SeqVizSelection>;
    render(): JSX.Element;
}
export {};
