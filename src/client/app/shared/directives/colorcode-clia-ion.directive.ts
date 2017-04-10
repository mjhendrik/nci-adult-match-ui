import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({ selector: '[colorCodeCliaIon]' })
export class ColorCodeCliaIonDirective implements OnInit {

    @Input() 'colorCodeCliaIon': string;

    constructor(private el: ElementRef) { }

    ngOnInit() {
        if (this.colorCodeCliaIon.indexOf('Contacted') !== -1) this.el.nativeElement.classList.add('text-success-light');
        else this.el.nativeElement.classList.add('text-danger-light');
    }

}
