export class ViewDataTransformerStub {
    makePatientListData = () => {
        return {
            psn: 'fake-psm',
            patient: {},
            summaryData: {},
            section: 'fake-section',
            entityId: 'fake-entity-id',
            needToScroll: () => { ; },
            tabs: {}
        };
    }
}
