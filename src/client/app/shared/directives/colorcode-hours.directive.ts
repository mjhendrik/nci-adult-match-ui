import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({ selector: '[colorcodeHours]' })
export class ColorCodeHoursDirective implements OnInit {

    @Input() 'colorcodeHours': number;

    constructor(private el: ElementRef) { }

    ngOnInit() {
        if (this.colorcodeHours < 8) {
            this.el.nativeElement.classList.add('text-success-light');
        } else if (this.colorcodeHours < 14) {
            this.el.nativeElement.classList.add('text-warning-light');
        } else {
            this.el.nativeElement.classList.add('text-danger-light');
        }

    }

}
