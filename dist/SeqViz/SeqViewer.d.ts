import * as React from "react";
import * as sizeMe from "react-sizeme";
import { Annotation } from "../part";
import { SearchResult } from "../utils/search";
import { HighlightRegion } from "./Linear/SeqBlock/LinearFind";
import { ICutSite } from "./common";
import { SeqVizSelection } from "./handlers/selection";
declare const _default: React.ComponentType<{
    name?: string | undefined;
    seq: string;
    compSeq?: string | undefined;
    annotations: Annotation[];
    search: SearchResult;
    selectionColors: {
        block: string;
        edge: string;
    };
    showComplement: boolean;
    zoom: {
        linear: number;
        circular: number;
    };
    highlightedRegions: HighlightRegion[];
    circular: boolean;
    setSelection: (update: SeqVizSelection) => void;
    cutSites: ICutSite[];
    selection: SeqVizSelection;
} & sizeMe.WithSizeProps>;
export default _default;
