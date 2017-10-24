import { VariantReportData } from './variant-report-data';

export interface VariantReportComparisonData {
    psn: string;
    showComparison: boolean;
    showOutsideAssay: boolean;
    currentPatientStatus: string;
    currentStepNumber: string;
    concordance: string;
    outsideData: VariantReportData;
    matchData: VariantReportData;
    comparisonVariantReport: {
        singleNucleotideVariantAndIndels: any[];
        copyNumberVariants: any[];
        unifiedGeneFusions: any[];
    };
}
