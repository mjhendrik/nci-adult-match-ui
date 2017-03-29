import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({ selector: '[colorcodeAssignment]' })
export class ColorCodeAssignmentDirective implements OnInit {

    @Input() 'colorcodeAssignment': string;

    constructor(private el: ElementRef) {
    }

    ngOnInit() {
        if (this.colorcodeAssignment === 'CONFIRMED') {
            this.el.nativeElement.className = 'text-success-light';
        } else if (this.colorcodeAssignment === 'PENDING_CONFIMATION') {
            this.el.nativeElement.className = 'text-info-light';
        }
    }
}
