import {
    Directive,
    ElementRef,
    HostListener
}
    from '@angular/core';

@Directive({
    selector: '[activeClass]'
})
export class ActiveClassDirective {

    constructor(private el: ElementRef) {
    }

    @HostListener('click', ['$event'])
    onItemClick(evt: any): void {
        let elements = evt.target.parentNode.parentNode.children;
        for (var i = 0; i < elements.length; i++) {
            elements[i].classList.remove('active-class');
        }
        evt.target.parentNode.classList.add('active-class');
    }
}
