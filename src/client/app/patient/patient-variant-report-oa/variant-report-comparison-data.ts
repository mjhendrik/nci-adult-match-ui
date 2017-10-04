export interface VariantReportComparisonData {
    showComparison: boolean;
    showOutsideAssay: boolean;
    psn: string;
    currentPatientStatus: string;
    currentStepNumber: string;
    concordance: string;
    outsideData: {
        analysisId: string;
        assays: any[];
        variantReport: any;
        assignmentReport: any;
        tvc_version: string;
        pool1: number;
        pool2: number;
        mapd: string;
        cellularity: any;
        showPools: boolean;
    };
    matchData: {
        analysisId: string;
        assays: any[];
        variantReport: any;
        assignmentReport: any;
        tvc_version: string;
        pool1: number;
        pool2: number;
        mapd: string;
        cellularity: any;
        showPools: boolean;
    };
    comparisonVariantReport: {
        singleNucleotideVariantAndIndels: any[];
        copyNumberVariants: any[];
        unifiedGeneFusions: any[];
    };
}
