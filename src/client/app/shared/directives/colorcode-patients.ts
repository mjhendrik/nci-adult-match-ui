import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({ selector: '[colorcode-patients]' })
export class colorCodePatients {

    @Input('colorcode-patients') con: string;

    constructor(private el: ElementRef) {
    }

    ngOnInit() {
        if (this.con === 'ON_TREATMENT_ARM') {
            this.el.nativeElement.className = 'text-success-light';
        }
        else if (this.con === 'REGISTRATION') {
            this.el.nativeElement.className = 'text-primary-light';
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
