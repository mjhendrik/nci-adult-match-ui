import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({ selector: '[colorCodePatients]' })
export class ColorCodePatientsDirective implements OnInit {

    @Input() 'colorCodePatients': string;

    constructor(private el: ElementRef) { }

    ngOnInit() {
        if (this.colorCodePatients === 'ON_TREATMENT_ARM') {
            this.el.nativeElement.classList.add('text-success-light');
        } else if (this.colorCodePatients === 'REGISTRATION') {
            this.el.nativeElement.classList.add('text-info-light');
        } else if (this.colorCodePatients === 'COMPASSIONATE_CARE' || this.colorCodePatients === 'PENDING_APPROVAL'
            || this.colorCodePatients === 'PENDING_CONFIRMATION' || this.colorCodePatients === 'REJOIN_REQUESTED'
            || this.colorCodePatients === 'NOT_ELIGIBLE') {
            this.el.nativeElement.classList.add('text-purple-light');
        } else if (this.colorCodePatients === 'OFF_TRIAL_DECEASED' || this.colorCodePatients === 'OFF_TRIAL_NO_TA_AVAILABLE'
            || this.colorCodePatients === 'OFF_TRIAL_NOT_CONSENTED') {
            this.el.nativeElement.classList.add('text-danger-light');
        } else if (this.colorCodePatients === 'FORMERLY_ON_ARM_OFF_TRIAL') {
            this.el.nativeElement.classList.add('text-warning-light');
        }

    }

}
