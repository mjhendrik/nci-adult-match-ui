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
        } else if (this.colorCodePatients === 'COMPASSIONATE_CARE' || this.colorCodePatients.indexOf('PENDING_') !== -1
            || this.colorCodePatients === 'REJOIN_REQUESTED' || this.colorCodePatients === 'NOT_ELIGIBLE') {
            this.el.nativeElement.classList.add('text-purple-light');
        } else if (this.colorCodePatients.indexOf('OFF_TRIAL_') !== -1 || this.colorCodePatients === 'OFF_TRIAL') {
            this.el.nativeElement.classList.add('text-danger-light');
        } else if (this.colorCodePatients === 'FORMERLY_ON_ARM_OFF_TRIAL') {
            this.el.nativeElement.classList.add('text-warning-light');
        }

    }

}
