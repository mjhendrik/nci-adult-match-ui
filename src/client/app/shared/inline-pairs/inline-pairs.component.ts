import {
    Component,
    Input
} from '@angular/core';

export class Pair {
    label: string;
    data: any;
}

@Component({
    moduleId: module.id,
    selector: 'sd-inline-pairs',
    styleUrls: ['inline-pairs.component.css'],
    template: `
    <span *ngIf="!items || !items.length">{{noDataMessage}}</span>
    <span *ngFor="let item of items; let last = last"><span class="pair-label">{{item.label}} :</span><span class="pair-data">{{item.data}}</span><span class="pair-delimiter" *ngIf="!last">;</span></span>
    `
})
export class InlinePairsComponent {
    @Input() noDataMessage: string = 'No data';
    @Input() items: Pair[];
}
