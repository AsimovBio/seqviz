import * as React from "react";
import { Coor, ISize, InputRefFuncType } from "../common";
export interface ILabel {
    start: number;
    end: number;
    type: "enzyme" | "annotation";
    name: string;
    id?: string;
}
interface LabelsProps {
    labels: ILabel[];
    size: ISize;
    yDiff: number;
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
}
interface LabelsState {
    hoveredGroup: unknown;
}
/**
 * used to build up all plasmid labels, for annotations, enzymes, etc
 *
 * a caveat to take into account here is that the names, outside the
 * map, might also overlap with one another. There will need to be a check, given
 * the dimensions of each name, calculated by the font, and the size
 * of the viewer, for scaling these names and positioning in the Y-direction
 * to avoid this overlap problem
 */
export default class Labels extends React.Component<LabelsProps, LabelsState> {
    static getDerivedStateFromProps: (nextProps: LabelsProps, prevState: LabelsState) => {
        labelGroups: {
            textCoor: {
                x: number;
                y: number;
            };
            name: string;
            textAnchor: unknown;
            lineCoor: Coor;
            labels: ILabel[];
            grouped: unknown;
            overflow: unknown;
        }[];
        hoveredGroup: unknown;
    };
    /**
     * need to avoid having overlapping names. if names
     * overlap with one another, they should be grouped together and
     * just show the first name of the group. Ex: "M13-rev,GTP,+3"
     *
     * On hover over this group, all the other names should be shown
     *
     * this should return all the informaiton needed to render the
     * name by itself or in a grouping
     */
    static groupOverlappingLabels: (props: LabelsProps) => {
        textCoor: {
            x: number;
            y: number;
        };
        name: string;
        textAnchor: unknown;
        lineCoor: Coor;
        labels: ILabel[];
        grouped: unknown;
        overflow: unknown;
    }[];
    state: {
        labelGroups: never[];
        hoveredGroup: string;
    };
    setHoveredGroup: (hoveredGroup: any) => void;
    render(): JSX.Element;
}
export {};
