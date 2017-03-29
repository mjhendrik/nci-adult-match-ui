import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({ selector: '[colorcodeVariantReport]' })
export class ColorCodeVariantReportDirective implements OnInit {

    @Input() 'colorcodeVariantReport': string;

    constructor(private el: ElementRef) { }

    ngOnInit() {
        if (this.colorcodeVariantReport === 'CONFIRMED') {
            this.el.nativeElement.className = 'text-success-light';
        } else if (this.colorcodeVariantReport === 'PENDING') {
            this.el.nativeElement.className = 'text-info-light';
        } else if (this.colorcodeVariantReport === 'REJECTED') {
            this.el.nativeElement.className = 'text-danger-light';
        }
    }
}
