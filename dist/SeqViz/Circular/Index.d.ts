import * as React from "react";
import { Coor, ISize, InputRefFuncType } from "../common";
interface IndexProps {
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
    seq: string;
    compSeq: string;
    name: string;
    size: ISize;
    yDiff: number;
    totalRows: number;
    showIndex: boolean;
}
/**
 * this component renders the following:
 * 		1. the name (center or bottom)
 * 		2. the number of bps (center or bottom)
 * 		3. the plasmid circle
 * 		4. the index ticks and numbers along the plasmid circle
 *
 * center or bottom here refers to the fact that the name/bps of the
 * part need to be pushed to the bottom of the circular viewer if there
 * are too many elements in the circular viewer and the name won't fit
 */
export default class Index extends React.PureComponent<IndexProps> {
    static contextType: React.Context<{
        linear: number;
        circular: number;
        setCentralIndex: (_: number) => void;
    }>;
    static context: any;
    static getDerivedStateFromProps: (nextProps: IndexProps) => {
        ticks: number[];
        indexInc: number;
    };
    state: {
        ticks: never[];
        indexInc: number;
    };
    /**
     * return a react element for the basepairs along the surface of the plasmid viewer
     */
    renderBasepairs: () => JSX.Element[];
    render(): JSX.Element | null;
}
export {};
