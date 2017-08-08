import {
    Directive,
    ElementRef,
    HostListener,
    AfterContentInit,
    ContentChildren,
    QueryList
} from '@angular/core';
import { MatchHeightDirective } from './match-height.directive';

@Directive({
    selector: '[refreshMatchHeight]'
})
export class RefreshMatchHeightDirective implements AfterContentInit {
    @ContentChildren(MatchHeightDirective) children: QueryList<MatchHeightDirective>;

    constructor(private el: ElementRef) { }

    ngAfterContentInit() {
        console.debug('AAAAAA!');
        this.refresh();
    }

    @HostListener('click')
    onClick() {
        console.debug('AAAAAA!');
        this.refresh();
    }

    private refresh(): void {
        this.children.toArray().forEach((item) => {
            item.adjust();
        });
    }
}
