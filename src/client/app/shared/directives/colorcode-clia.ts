import { Directive, ElementRef, Input, OnInit } from '@angular/core';
@Directive({ selector: '[colorcode-clia]' })
export class colorCodeClia {

    @Input('colorcode-clia') con: string;

    constructor(private el: ElementRef) {
    }

    ngOnInit() {
        if (this.con == "PASSED") {
            this.el.nativeElement.style.color = '#17B6A4';
        }
        else if (this.con == "FAILED") {
            this.el.nativeElement.style.color = '#F04B46';
        }
        else if (this.con == "PENDING") {
            this.el.nativeElement.style.color = '#9b59b6';
        }
    }

}
