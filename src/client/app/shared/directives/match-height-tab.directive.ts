import {
    Directive,
    ElementRef,
    Input,
    HostListener
} from '@angular/core';

@Directive({
    selector: '[matchHeightTab]'
})
export class MatchHeightTabClickDirective {

    // class name to match height
    @Input()
    matchHeightTab: any;

    constructor(private el: ElementRef) { }

    @HostListener('click')
    onTabClick() {
        this.adjustHeight(this.el.nativeElement, this.matchHeightTab);
    }

    adjustHeight(parent: HTMLElement, className: string) {
        // match height logic here
        if (!parent) return;
        const children = document.getElementsByClassName(className);

        if (!children) return;

        const maxHeight = parent.closest('.' + className).getBoundingClientRect().height;
        Array.from(children).forEach((x: HTMLElement) => {
            x.style.height = '0px';
        });

        setTimeout(function () {
            Array.from(children)
                .forEach((x: HTMLElement) => x.style.height = `${maxHeight}px`);
        }, 159);
    }
}
