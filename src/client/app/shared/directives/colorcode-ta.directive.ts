import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({ selector: '[colorCodeTa]' })
export class ColorCodeTaDirective implements OnInit {

    @Input() 'colorCodeTa': string;

    constructor(private el: ElementRef) { }

    ngOnInit() {
        if (this.colorCodeTa === 'OPEN' || this.colorCodeTa === 'REACTIVATED') {
            this.el.nativeElement.classList.add('text-success-light');
        } else if (this.colorCodeTa === 'SUSPENDED') {
            this.el.nativeElement.classList.add('text-warning-light');
        } else if (this.colorCodeTa === 'CLOSED' || this.colorCodeTa === 'AMENDED') {
            this.el.nativeElement.classList.add('text-danger-light');
        } else if (this.colorCodeTa === 'PENDING' || this.colorCodeTa === 'READY') {
            this.el.nativeElement.classList.add('text-info-light');
        }

    }

}
