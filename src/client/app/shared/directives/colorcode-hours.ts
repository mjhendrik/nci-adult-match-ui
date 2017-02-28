import { Directive, ElementRef, Input, OnInit } from '@angular/core';
@Directive({ selector: '[colorcode-hours]' })
export class colorCodeHours {

    @Input('colorcode-hours') con: number;

    constructor(private el: ElementRef) {
    }

    ngOnInit() {
        if (this.con < 8) {
            this.el.nativeElement.style.color = '#17B6A4';
        }
        else if (this.con < 14) {
            this.el.nativeElement.style.color = '#fcaf41';
        }
        else {
            this.el.nativeElement.style.color = '#F04B46';
        }
    }

}
