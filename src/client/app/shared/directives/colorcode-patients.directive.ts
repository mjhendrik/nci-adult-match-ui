import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({ selector: '[colorcodePatients]' })
export class ColorCodePatientsDirective {

    @Input() 'colorcodePatients': string;

    constructor(private el: ElementRef) {
    }

    ngOnInit() {
        if (this.colorcodePatients === 'ON_TREATMENT_ARM') {
            this.el.nativeElement.className = 'text-success-light';
        } else if (this.colorcodePatients === 'REGISTRATION') {
            this.el.nativeElement.className = 'text-info-light';
        } else if (this.colorcodePatients === 'COMPASSIONATE_CARE' || this.colorcodePatients === 'PENDING_APPROVAL'
            || this.colorcodePatients === 'PENDING_colorcodePatientsFIRMATION' || this.colorcodePatients === 'REJOIN_REQUESTED'
            || this.colorcodePatients === 'NOT_ELIGIBLE') {
            this.el.nativeElement.className = 'text-purple-light';
        } else if (this.colorcodePatients === 'OFF_TRIAL_DECEASED' || this.colorcodePatients === 'OFF_TRIAL_NO_TA_AVAILABLE'
            || this.colorcodePatients === 'OFF_TRIAL_NOT_colorcodePatientsSENTED') {
            this.el.nativeElement.className = 'text-danger-light';
        } else if (this.colorcodePatients === 'FORMERLY_ON_ARM_OFF_TRIAL') {
            this.el.nativeElement.className = 'text-warning-light';
        }

    }

}
