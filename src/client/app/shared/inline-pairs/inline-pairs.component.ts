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
    <span *ngFor="let item of items; let last = last" [popover]="poDetails" triggers="mouseenter:mouseleave" placement="bottom">
        <span class="pair-label">{{item.label}}:</span><span class="pair-data">{{item.data}}</span><span class="pair-delimiter" *ngIf="!last">;</span>
    </span>
    <template #poDetails>
        <ul class="details-expanded width-250">
            <li *ngFor="let item of items">
                <span class="pair-label">{{item.label}}:</span>
                <span class="pair-data">{{item.data}}</span>
            </li>
        </ul>
    </template>   
    `
})
export class InlinePairsComponent {
    @Input() noDataMessage: string = 'No data';
    @Input() items: Pair[];
}
