import * as React from "react";
import { Annotation, Element, Part } from "../part";
import { SearchResult } from "../utils/search";
import { HighlightRegion } from "./Linear/SeqBlock/LinearFind";
import { IEnzyme } from "./common";
import { SeqVizSelection } from "./handlers/selection";
import "./style.css";
export interface SeqVizProps {
    accession?: string;
    name?: string;
    seq?: string;
    compSeq?: string;
    annotations?: Annotation[];
    file?: string | File;
    backbone?: string;
    colors?: string[];
    bpColors: {
        [key: number]: string;
    };
    copyEvent: (event: KeyboardEvent) => void;
    enzymes: string[];
    enzymesCustom: {
        [key: string]: IEnzyme;
    };
    onSearch: (search: SearchResult[]) => void;
    onSelection: (selection: SeqVizSelection) => void;
    rotateOnScroll: boolean;
    search: {
        query: string;
        mismatch: number;
    };
    selectedRange: {
        start: number;
        end: number;
        ref: string;
    };
    selectionColors: {
        block: string;
        edge: string;
    };
    showComplement: boolean;
    showAnnotations: boolean;
    showIndex: boolean;
    showPrimers: boolean;
    style: Record<string, unknown>;
    translations: Element[];
    viewer: "linear" | "circular" | "both" | "both_flip";
    zoom: {
        circular: number;
        linear: number;
    };
    highlightedRegions?: HighlightRegion[];
}
/**
 * A container for processing part input and rendering either
 * a linear or circular viewer or both
 */
export default class SeqViz extends React.Component<SeqVizProps, any> {
    static defaultProps: {
        accession: string;
        annotations: never[];
        backbone: string;
        bpColors: {};
        colors: never[];
        compSeq: string;
        copyEvent: () => boolean;
        enzymes: never[];
        enzymesCustom: {};
        name: string;
        onSearch: (results: SearchResult[]) => SearchResult[];
        onSelection: (selection: SeqVizSelection) => SeqVizSelection;
        rotateOnScroll: boolean;
        search: {
            query: string;
            mismatch: number;
        };
        selectionColors: {
            block: string;
            edge: string;
        };
        seq: string;
        showComplement: boolean;
        showIndex: boolean;
        showPrimers: boolean;
        style: {};
        translations: never[];
        viewer: string;
        zoom: {
            circular: number;
            linear: number;
        };
    };
    constructor(props: SeqVizProps);
    componentDidMount: () => Promise<void>;
    componentDidUpdate: ({ accession, annotations, backbone, enzymes, enzymesCustom, file, search }: SeqVizProps, { part }: {
        part: any;
    }) => Promise<void>;
    /**
     * Set the part from a file or an accession ID
     */
    setPart: () => Promise<void>;
    /**
     * Search for the query sequence in the part sequence, set in state
     */
    search: (part?: Part | null) => void;
    /**
     * Find and save enzymes' cutsite locations
     */
    cut: (part?: {
        seq: string;
    } | null) => void;
    /**
     * Modify the annotations to add unique ids, fix directionality and
     * modulo the start and end of each to match SeqViz's API
     */
    parseAnnotations: (annotations?: Annotation[] | null, seq?: string) => {
        direction: number;
        start: number;
        end: number;
        id: string;
        name: string;
        color: string;
        type: "enzyme" | "insert";
    }[];
    /**
     * Update the central index of the linear or circular viewer
     */
    setCentralIndex: (type: "linear" | "circular", value: number) => void;
    /**
     * Update selection in state. Should only be performed from handlers/selection.jsx
     */
    setSelection: (selection: SeqVizSelection) => void;
    render(): JSX.Element;
}
