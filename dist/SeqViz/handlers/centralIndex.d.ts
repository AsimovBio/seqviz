import * as React from "react";
/** Default central index context object */
declare const CentralIndexContext: React.Context<{
    linear: number;
    circular: number;
    setCentralIndex: (_: number) => void;
}>;
export default CentralIndexContext;
