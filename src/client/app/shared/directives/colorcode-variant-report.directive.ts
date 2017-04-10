import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({ selector: '[colorCodeVariantReport]' })
export class ColorCodeVariantReportDirective implements OnInit {

    @Input() 'colorCodeVariantReport': string;

    constructor(private el: ElementRef) { }

    ngOnInit() {
        if (this.colorCodeVariantReport === 'CONFIRMED') {
            this.el.nativeElement.classList.add('text-success-light');
        } else if (this.colorCodeVariantReport === 'PENDING') {
            this.el.nativeElement.classList.add('text-info-light');
        } else if (this.colorCodeVariantReport === 'REJECTED') {
            this.el.nativeElement.classList.add('text-danger-light');
        }
    }
}
