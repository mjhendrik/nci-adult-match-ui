import { Component, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'amoi-list',
    styleUrls: ['amoi-list.component.css'],
    template: `
    <div ng-if='isAmoi' class='amoi-status'>\
        <div *ngFor='amoi of amois'>\
            <span class='label {{getBadgeColorStyle(amoi)}}' data-placement='top' title='{{getTreatmentStatus(amoi)}}' onmouseenter='$(this).tooltip(\'show\')'> {{getTreatmentLabel(amoi)}}</span>\
            <treatment-arm-title treatment-arm-id='amoi.treatment_arm_id' stratum-id='amoi.stratum_id'></treatment-arm-title>\
        </div>\
    </div>\
    <div ng-if='!isAmoi' class='amoi-status'> - </div>
    `
})
export class AmoiListComponent {

    @Input() dimPrefix: boolean = true;
    @Input() removePrefix: boolean;
    @Input() textColor: string;
    @Input() version: string;

    suffix: string;
    prefix: string;

    private standardPrefix: string = 'EAY131-';

    private id: string;
    @Input()
    set treatmentArmId(id: string) {
        this.id = id;
        [this.prefix, this.suffix] = this.splitId();
    }
    get treatmentArmId(): string {
        return this.id;
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

    private splitId(): [string, string] {
        if (!this.id)
            return ['', ''];

        if (this.id.toUpperCase().startsWith(this.standardPrefix)) {
            return [this.standardPrefix, this.id.substring(this.standardPrefix.length)];
        }

        return ['', this.id];
    }
}
