import { Directive, ElementRef, Input, OnInit } from '@angular/core';
@Directive({ selector: '[colorcode-ta]' })
export class colorCodeTa {

    @Input('colorcode-ta') con: string;

    constructor(private el: ElementRef) {
    }

    ngOnInit() {
        if (this.con === 'OPEN' || this.con === 'REACTIVATED') {
            this.el.nativeElement.className = 'text-success-light';
        }
        else if (this.con === 'SUSPENDED') {
            this.el.nativeElement.className = 'text-warning-light';
        }
        else if (this.con === 'CLOSED' || this.con === 'AMENDED') {
            this.el.nativeElement.className = 'text-danger-light';
        }
        else if (this.con === 'PENDING' || this.con === 'READY') {
            this.el.nativeElement.className = 'text-info-light';
        }
    }

}
