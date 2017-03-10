import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({ selector: '[colorcode-patients]' })
export class colorCodePatients {

    @Input('colorcode-patients') con: string;

    constructor(private el: ElementRef) {
    }

    ngOnInit() {
        if (this.con == "ON_TREATMENT_ARM") {
            this.el.nativeElement.style.color = '#17B6A4';
        }
        else if (this.con == "REGISTRATION") {
            this.el.nativeElement.style.color = '#2184DA';
        }
        else if (this.con == "COMPASSIONATE_CARE" || this.con == "PENDING_APPROVAL" || this.con == "PENDING_CONFIRMATION" || this.con == "REJOIN_REQUESTED") {
            this.el.nativeElement.style.color = '#9b59b6';
        }
        else if (this.con == "OFF_TRIAL_DECEASED" || this.con == "OFF_TRIAL_NO_TA_AVAILABLE" || this.con == "OFF_TRIAL_NOT_CONSENTED") {
            this.el.nativeElement.style.color = '#F04B46';
        }
    }

}
