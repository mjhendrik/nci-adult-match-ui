import { Tabs } from '../patient-details/patient-details.module';

export class ViewDataTransformerStub {
    makePatientListData = () => {
        return {
            psn: 'fake-psm',
            patient: {
                patientSequenceNumber: 'fake-psn',
                disease: {
                    name: 'fake-name',
                    shortName: 'fake-shortName',
                    ctepCategory: 'fake-ctepCategory',
                    ctepSubCategory: 'fake-ctepSubCategory',
                    ctepTerm: 'fake-ctepTerm',
                    medDRACode: 'fake-medDRACode'
                }
            },
            summaryData: {},
            section: 'fake-section',
            entityId: 'fake-entity-id',
            needToScroll: () => { ; },
            tabs: new Tabs(),
        };
    }
}
