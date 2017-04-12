import {
    Directive,
    ElementRef,
    AfterViewChecked,
    Input,
    HostListener
} from '@angular/core';

@Directive({
    selector: '[matchHeightTab]'
})
export class MatchHeightTabClickDirective implements AfterViewChecked {

    // class name to match height
    @Input()
    matchHeightTab: any;

    constructor(private el: ElementRef) { }

    ngAfterViewChecked() {
        // call our matchHeightTab function here later
        this.adjustHeight(this.el.nativeElement, this.matchHeightTab);
    }

    @HostListener('click')
    onResize() {
        this.adjustHeight(this.el.nativeElement, this.matchHeightTab);
    }

    adjustHeight(parent: HTMLElement, className: string) {
        // match height logic here

        if (!parent) return;
        const children = parent.getElementsByClassName(className);

        if (!children) return;

        // reset all children height
        Array.from(children).forEach((x: HTMLElement) => {
            x.style.height = 'initial';
        });

        const maxHeight = parent.getBoundingClientRect().height;

        // apply max height
        Array.from(children)
            .forEach((x: HTMLElement) => x.style.height = `${maxHeight}px`);
    }
}
