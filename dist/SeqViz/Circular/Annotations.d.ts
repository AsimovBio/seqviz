import * as React from "react";
import { Annotation } from "../../part";
import { Coor, ISize, InputRefFuncType } from "../common";
interface AnnotationsProps {
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
    annotations: Annotation[];
    size: ISize;
    rowsToSkip: number;
    inlinedAnnotations: string[];
}
/**
 * Used to build up all the path elements. Does not include a display
 * of the annotation name or a line connecting name to annotation
 *
 * one central consideration here is that annotations might overlap with one another.
 * to avoid having those overalp visually, annotations are first moved into rows,
 * which are non-overlapping arrays or annotation arrays, which are then
 * used to create the array of array of annotation paths
 *
 */
export default class Annotations extends React.PureComponent<AnnotationsProps> {
    /** during an annotation hover event, darken all other pieces of the same annotation */
    hoverAnnotation: (className: string, opacity: number) => void;
    render(): JSX.Element;
}
export {};
