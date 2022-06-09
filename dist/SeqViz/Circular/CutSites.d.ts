import * as React from "react";
import { Coor, ICutSite, InputRefFuncType } from "../common";
interface CutSitesProps {
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
    selectionRows: number;
    cutSites: ICutSite[];
}
export default class CutSites extends React.PureComponent<CutSitesProps> {
    calculateLinePath: (index: number, startRadius: number, endRadius: number) => string;
    displayCutSite: (cutSite: ICutSite) => JSX.Element;
    recogHighlightArc: (c: ICutSite) => JSX.Element | undefined;
    render(): JSX.Element | null;
}
export {};
