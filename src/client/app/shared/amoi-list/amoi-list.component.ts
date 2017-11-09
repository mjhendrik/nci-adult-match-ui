import { Component, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'amoi-list',
    styleUrls: ['amoi-list.component.css'],
    template: `
    <div *ngIf="isAmoi" class="amoi-status">\
        <div *ngFor="amoi of amoiList">\
            <span class="label {{getBadgeColorStyle(amoi)}}" title="{{getTreatmentStatus(amoi)}}"> {{getTreatmentLabel(amoi)}}</span>\
            <treatment-arm-title treatment-arm-id="amoi.treatment_arm_id" stratum-id="amoi.stratum_id"></treatment-arm-title>\
        </div>\
    </div>\
    <div *ngIf="!isAmoi" class="amoi-status"> - </div>
    `
})
export class AmoiListComponent {
    // tslint:disable-next-line:member-ordering
    amoiList: any[];
    private amoi: any;

    @Input()
    set amois(amoi: any) {
        this.amoi = amoi;
        this.amoiList = this.extractList(amoi);
    }
    get amois(): any {
        return this.amoi;
    }

    get isAmoi(): boolean {
        return this.amoiList && this.amoiList.length > 0;
    }

    getInclusion(amoi: any) {
        return amoi.exclusion ? 'E' : 'I';
    }

    getDisplayText(amoi: any) {
        return amoi.amoi_status;
    }

    getBadgeColorStyle(amoi: any) {
        if (amoi.exclusion)
            return 'label-danger';

        var status = (amoi.amoi_status || '').toLowerCase();

        if (status === 'prior')
            return 'label-danger';

        if (status === 'future' && !amoi.exclusion)
            return 'label-lightblue';

        if (status === 'current' && !amoi.exclusion)
            return 'label-lightgreen';

        return '';
    }

    getTreatmentStatus(amoi: any) {
        return amoi.amoi_status + (amoi.exclusion ? ' - EXCLUSION' : ' - INCLUSION');
    }

    getTreatmentLabel(amoi: any) {
        return (amoi.amoi_status ? amoi.amoi_status.substring(0, 1) : '') + (amoi.exclusion ? ' - E' : ' - I');
    }

    private extractList(amoi: any): any[] {
        if (!amoi)
            return [];

        Object.keys(amoi).map(x => x);
    }
}
