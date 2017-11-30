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
    template: `
    `
})
export class InlinePairsComponent {
    @Input() items: Pair[];
}
