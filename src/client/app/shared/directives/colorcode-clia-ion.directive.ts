import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({ selector: '[colorcodeCliaIon]' })
export class ColorCodeCliaIonDirective implements OnInit {

    @Input() 'colorcodeCliaIon': string;

    constructor(private el: ElementRef) { }

    ngOnInit() {
        if (this.colorcodeCliaIon.indexOf('Contacted') !== -1) this.el.nativeElement.classList.add('text-success-light');
        else this.el.nativeElement.classList.add('text-danger-light');
    }

}
