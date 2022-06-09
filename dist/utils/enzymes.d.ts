/**
 * NEB Restriction Enzymes
 *
 * a list of enzyme objects with their name as the key,
 * their recognition site sequence as "rseq", and cut site relative to the
 * start of the recognition site as "fcut", and the start of the resulting overhang
 * from the recognition site as "rcut"
 *
 * eg: PstI with recognition site "CTGCAG" cuts so that the break is
 * at (cutSite = 5):
 * 		..C TGCA|G..
 * 		..G|ACGT C..
 *
 * and the resulting fragment looks like (rcut = 1):
 * 		..CTGCA
 * 		..G****
 *
 */
declare const _default: {
    "PI-SceI": {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    "PI-PspI": {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    "I-CeuI": {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    "I-SceI": {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    AscI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    AsiSI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    FseI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    NotI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    PacI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    PmeI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    PspXI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    SbfI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    SfiI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    SgrAI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    SrfI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    SwaI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    BaeI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    BbvCI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    BspQI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    CspCI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    PpuMI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    RsrII: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    SapI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    SexAI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    AatII: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    Acc65I: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    AccI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    AclI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    AcuI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    AfeI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    AflII: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    AflIII: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    AgeI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    AhdI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    AleI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    AlwNI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    ApaI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    ApaLI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    ApoI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    AseI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    AvaI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    AvrII: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    BaeGI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    BamHI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    BanI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    BanII: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    BbsI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    BcgI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    BciVI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    BclI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    BfuAI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    BglI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    BglII: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    BlpI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    BmgBI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    BmrI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    BmtI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    BpmI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    Bpu10I: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    BpuEI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    BsaAI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    BsaBI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    BsaHI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    BsaI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    BsaWI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    BsaXI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    BseRI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    BseYI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    BsgI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    BsiEI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    BsiHKAI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    BsiWI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    BsmBI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    BsmI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    BsoBI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    Bsp1286I: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    BspDI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    BspEI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    BspHI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    BspMI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    BsrBI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    BsrDI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    BsrFI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    BsrGI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    BssHII: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    BssSI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    BstAPI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    BstBI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    BstEII: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    BstXI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    BstYI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    BstZ17I: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    Bsu36I: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    BtgI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    BtgZI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    BtsI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    ClaI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    DraI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    DraIII: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    DrdI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    EaeI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    EagI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    EarI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    EciI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    Eco53kI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    EcoNI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    EcoO109I: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    EcoRI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    EcoRV: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    Esp3I: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    FspI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    HaeII: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    HincII: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    HindIII: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    HpaI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    KasI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    KpnI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    MfeI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    MluI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    MmeI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    MscI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    MslI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    MspA1I: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    NaeI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    NarI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    NcoI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    NdeI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    NgoMIV: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    NheI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    NmeAIII: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    NruI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    NsiI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    NspI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    PaeR7I: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    PciI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    PflFI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    PflMI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    PluTI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    PmlI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    PshAI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    PsiI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    PspOMI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    PstI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    PvuI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    PvuII: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    SacI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    SacII: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    SalI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    ScaI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    SfcI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    SfoI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    SmaI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    SmlI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    SnaBI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    SpeI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    SphI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    SspI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    StuI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    StyI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    TspMI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    Tth111I: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    XbaI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    XcmI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    XhoI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    XmaI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    XmnI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    ZraI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    AlwI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    ApeKI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    AvaII: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    BbvI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    BccI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    BceAI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    BcoDI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    BsmAI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    BsmFI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    BspCNI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    BsrI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    BstNI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    BtsCI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    BtsIMutI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    DpnI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    FauI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    FokI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    HgaI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    HphI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    Hpy99I: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    HpyAV: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    LpnPI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    MboII: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    MlyI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    NciI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    PleI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    PspGI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    SfaNI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    TfiI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    TseI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    Tsp45I: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    TspRI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    AciI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    AluI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    BfaI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    BsaJI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    BslI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    BstUI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    Cac8I: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    CviAII: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    "CviKI-1": {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    CviQI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    DdeI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    DpnII: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    FatI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    Fnu4HI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    HaeIII: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    HhaI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    HinP1I: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    HinfI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    HpaII: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    Hpy166II: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    Hpy188I: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    Hpy188III: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    HpyCH4III: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    HpyCH4IV: {
        seq: string;
        rcut: number;
        fcut: number;
    };
    HpyCH4V: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    MboI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    MluCI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    MnlI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    MseI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    MspI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    MwoI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    NlaIII: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    NlaIV: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    RsaI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    Sau3AI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    Sau96I: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    ScrFI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    StyD4I: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    TaqI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    AbaSI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    FspEI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
    MspJI: {
        rseq: string;
        rcut: number;
        fcut: number;
    };
};
export default _default;
