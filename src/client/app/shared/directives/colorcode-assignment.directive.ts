import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({ selector: '[colorCodeAssignment]' })
export class ColorCodeAssignmentDirective implements OnInit {

    @Input() 'colorCodeAssignment': string;

    constructor(private el: ElementRef) { }

    ngOnInit() {
        if (this.colorCodeAssignment === 'CONFIRMED') {
            this.el.nativeElement.classList.add('text-success-light');
        } else if (this.colorCodeAssignment === 'PENDING_CONFIMATION') {
            this.el.nativeElement.classList.add('text-info-light');
        } else if (this.colorCodeAssignment === 'REJECTED') {
            this.el.nativeElement.classList.add('text-danger-light');
        }
    }
}
