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
    onTabClick() {
        this.adjustHeight(this.el.nativeElement, this.matchHeightTab);
    }

    adjustHeight(parent: HTMLElement, className: string) {
        // match height logic here
        if (!parent) return;
        const children = parent.getElementsByClassName(className);

        if (!children) return;

        const maxHeight = parent.closest('.' + className).getBoundingClientRect().height;

        // reset all children height
        Array.from(children).forEach((x: HTMLElement) => {
            x.style.height = 'initial';
        });

        console.log(parent.closest('.' + className));

        Array.from(children)
            .forEach((x: HTMLElement) => x.style.height = `${maxHeight}px`);
    }
}
