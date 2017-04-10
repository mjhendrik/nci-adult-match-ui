import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({ selector: '[colorCodeHours]' })
export class ColorCodeHoursDirective implements OnInit {

    @Input() 'colorCodeHours': number;

    constructor(private el: ElementRef) { }

    ngOnInit() {
        if (this.colorCodeHours < 8) {
            this.el.nativeElement.classList.add('text-success-light');
        } else if (this.colorCodeHours < 14) {
            this.el.nativeElement.classList.add('text-warning-light');
        } else {
            this.el.nativeElement.classList.add('text-danger-light');
        }

    }

}
