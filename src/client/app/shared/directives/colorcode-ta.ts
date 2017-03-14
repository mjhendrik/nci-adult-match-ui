import { Directive, ElementRef, Input, OnInit } from '@angular/core';
@Directive({ selector: '[colorcode-ta]' })
export class colorCodeTa {

    @Input('colorcode-ta') con: string;

    constructor(private el: ElementRef) {
    }

    ngOnInit() {
        if (this.con === 'OPEN' || this.con === 'REACTIVATED') {
            this.el.nativeElement.style.color = '#17B6A4';
        }
        else if (this.con === 'SUSPENDED') {
            this.el.nativeElement.style.color = '#fcaf41';
        }
        else if (this.con === 'CLOSED' || this.con === 'AMENDED') {
            this.el.nativeElement.style.color = '#F04B46';
        }
        else if (this.con === 'PENDING' || this.con === 'READY') {
            this.el.nativeElement.style.color = '#2184DA';
        }
    }

}
