import { Directive, ElementRef, Input, OnInit } from '@angular/core';
@Directive({ selector: '[colorcode]' })
export class colorCode {

    @Input('colorcode') con: number;

    constructor(private el: ElementRef) {
        el.nativeElement.style.color = 'black';
    }

    ngOnInit() {
        if (this.con < 1000) {
            if (this.con < 200) {
                this.el.nativeElement.style.color = '#17B6A4';
            }
            else if (this.con < 400) {
                this.el.nativeElement.style.color = '#fcaf41';
            }
            else {
                this.el.nativeElement.style.color = '#F04B46';
            }
        }
        else {
            if (this.con < 2000) {
                this.el.nativeElement.style.color = '#17B6A4';
            }
            else if (this.con < 4000) {
                this.el.nativeElement.style.color = '#fcaf41';
            }
            else {
                this.el.nativeElement.style.color = '#F04B46';
            }

        }
    }


}
