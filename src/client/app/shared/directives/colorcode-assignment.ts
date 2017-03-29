import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({ selector: '[colorcode-assignment]' })
export class colorCodeAssignment {

    @Input('colorcode-assignment') con: string;

    constructor(private el: ElementRef) {
    }

    ngOnInit() {
        if (this.con === 'CONFIRMED') {
            this.el.nativeElement.className = 'text-success-light';
        }
        else if (this.con === 'REGISTRATION') {
            this.el.nativeElement.className = 'text-info-light';
        }
        else if (this.con === 'COMPASSIONATE_CARE' || this.con === 'PENDING_APPROVAL' || this.con === 'PENDING_CONFIRMATION'
            || this.con === 'REJOIN_REQUESTED' || this.con === 'NOT_ELIGIBLE') {
            this.el.nativeElement.className = 'text-purple-light';
        }
        else if (this.con === 'OFF_TRIAL_DECEASED' || this.con === 'OFF_TRIAL_NO_TA_AVAILABLE' || this.con === 'OFF_TRIAL_NOT_CONSENTED') {
            this.el.nativeElement.className = 'text-danger-light';
        }
        else if (this.con === 'FORMERLY_ON_ARM_OFF_TRIAL') {
            this.el.nativeElement.className = 'text-warning-light';
        }
    }

}
