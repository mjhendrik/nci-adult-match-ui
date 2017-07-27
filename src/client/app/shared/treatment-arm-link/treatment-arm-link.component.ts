import { Component, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'treatment-arm-link',
    styleUrls: ['treatment-arm-link.component.css'],
    template: `
    <a *ngIf="treatmentArmId; else noData" href [routerLink]="['/treatments', treatmentArmId]" class="link-none ta-link">
        <span *ngIf="removePrefix; else showPrefix" [style.color]="textColor"><i class="fa fa-medkit"></i> {{suffix | dashify}}</span>

        <ng-template #showPrefix>
            <span *ngIf="dimPrefix"><i class="fa fa-medkit"></i> <span class="prefix">{{prefix | dashify}}</span><span class="suffix">{{suffix | dashify}}</span></span>
            <span *ngIf="!dimPrefix" [style.color]="textColor"><i class="fa fa-medkit"></i> <span>{{prefix | dashify}}</span><span>{{suffix | dashify}}</span></span>
        </ng-template>

        <span *ngIf="version" class="version" [style.color]="textColor">({{version | dashify}})</span>
    </a>
    <ng-template #noData>-</ng-template>
    `
})
export class TreatmentArmLinkComponent {

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

    private splitId(): [string, string] {
        if (!this.id)
            return ['', ''];

        if (this.id.toUpperCase().startsWith(this.standardPrefix)) {
            return [this.standardPrefix, this.id.substring(this.standardPrefix.length)];
        }

        return ['', this.id];
    }
}
