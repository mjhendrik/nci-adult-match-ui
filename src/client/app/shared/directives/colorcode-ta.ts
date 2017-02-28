import { Directive, ElementRef, Input, OnInit } from '@angular/core';
@Directive({ selector: '[colorcode-ta]' })
export class colorCodeTa {

    @Input('colorcode-ta') con: string;

    constructor(private el: ElementRef) {
    }

    ngOnInit() {
        if (this.con == "OPEN" || "REACTIVATED") {
            this.el.nativeElement.style.color = '#17B6A4';
        }
        if (this.con == "SUSPENDED") {
            this.el.nativeElement.style.color = '#fcaf41';
        }
        if (this.con == "CLOSED") {
            this.el.nativeElement.style.color = '#F04B46';
        }
        if (this.con == "PENDING") {
            this.el.nativeElement.style.color = '#2184DA';
        }
    }

}
