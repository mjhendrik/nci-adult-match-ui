export class DiseaseInfo {
    shortName: string;
    ctepCategory: string;
    ctepSubCategory: string;
    ctepTerm: string;
    medDRACode: string;
    isEmpty: boolean;

    static default(): DiseaseInfo {
        return {
            shortName: null,
            ctepCategory: null,
            ctepSubCategory: null,
            ctepTerm: null,
            medDRACode: null,
            isEmpty: true
        };
    }
}
