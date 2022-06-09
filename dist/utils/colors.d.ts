/**
 * a color pallete of colors (for LinearSeq right now)\
 * generated using:
 * https://material.io/color/#!/?view.left=0&view.right=0&primary.color=FFCC80
 */
export declare const COLORS: string[];
export declare const COLOR_BORDER_MAP: {
    "#9DEAED": string;
    "#8FDE8C": string;
    "#CFF283": string;
    "#8CDEBD": string;
    "#F0A3CE": string;
    "#F7C672": string;
    "#F07F7F": string;
    "#FAA887": string;
    "#F099F7": string;
    "#C59CFF": string;
    "#6B81FF": string;
    "#85A6FF": string;
};
export declare const INSERT_COLORS: string[];
export declare const chooseRandomColor: (colors?: string[]) => string;
/** get an "indexed" color from the colors array */
export declare const colorByIndex: (i: any, colors?: string[]) => string;
/** get an "indexed" color from the colors array */
export declare const borderColorByIndex: (i: any) => any;
/** darken a HEX color by 50% */
export declare const darkerColor: (c: any) => any;
