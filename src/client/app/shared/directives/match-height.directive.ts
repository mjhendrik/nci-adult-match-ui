import {
    Directive,
    ElementRef,
    AfterViewChecked,
    Input,
    HostListener
} from '@angular/core';

@Directive({
    selector: '[matchHeight]'
})
export class MatchHeightDirective implements AfterViewChecked {

    // class name to match height
    @Input()
    matchHeight: any;

    constructor(private el: ElementRef) { }

    ngAfterViewChecked() {
        this.adjust();
    }

    @HostListener('window:resize')
    onResize() {
        this.adjust();
    }

    adjust() {
        this.adjustHeight(this.el.nativeElement, this.matchHeight);
    }

    private adjustHeight(parent: HTMLElement, className: string) {
        if (!parent) return;
        const children = parent.getElementsByClassName(className);

        if (!children || !children.length) return;

        // reset all children height
        Array.from(children).forEach((x: HTMLElement) => {
            x.style.height = 'initial';
        });

        // gather all height
        const itemHeights = Array.from(children)
            .map(x => x.getBoundingClientRect().height);

        // find max height
        const maxHeight = itemHeights.reduce((prev, curr) => {
            return curr > prev ? curr : prev;
        }, 0);

        // apply max height
        Array.from(children)
            .forEach((x: HTMLElement) => x.style.height = `${maxHeight}px`);

        // if (document.getElementById('tbody-height') !== null) {
        //     let contentHeight: number = maxHeight - 67;
        //     document.getElementById('tbody-height').style.height = `${contentHeight}px`;
        // }
    }
}
