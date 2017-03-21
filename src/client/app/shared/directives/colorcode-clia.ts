import { Directive, ElementRef, Input, OnInit } from '@angular/core';
@Directive({ selector: '[colorcode-clia]' })
export class colorCodeClia {

    @Input('colorcode-clia') con: string;

    constructor(private el: ElementRef) {
    }

    ngOnInit() {
        if (this.con == "PASSED") {
            this.el.nativeElement.className = 'text-success-light';
        }
        else if (this.con == "FAILED") {
            this.el.nativeElement.className = 'text-danger-light';
        }
        else if (this.con == "PENDING") {
            this.el.nativeElement.className = 'text-purple-light';
        }
    }

}
