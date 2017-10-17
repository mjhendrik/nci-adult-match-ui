import { VariantReportData } from '../patient-variant-report/patient-variant-report.module';

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
