import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({ selector: '[colorcodeTa]' })
export class ColorCodeTaDirective implements OnInit {

    @Input() 'colorcodeTa': string;

    constructor(private el: ElementRef) { }

    ngOnInit() {
        if (this.colorcodeTa === 'OPEN' || this.colorcodeTa === 'REACTIVATED') {
            this.el.nativeElement.classList.add('text-success-light');
        } else if (this.colorcodeTa === 'SUSPENDED') {
            this.el.nativeElement.classList.add('text-warning-light');
        } else if (this.colorcodeTa === 'CLOSED' || this.colorcodeTa === 'AMENDED') {
            this.el.nativeElement.classList.add('text-danger-light');
        } else if (this.colorcodeTa === 'PENDING' || this.colorcodeTa === 'READY') {
            this.el.nativeElement.classList.add('text-info-light');
        }

    }

}
