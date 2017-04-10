import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({ selector: '[colorCodeClia]' })
export class ColorCodeCliaDirective implements OnInit {

    @Input() 'colorCodeClia': string;

    constructor(private el: ElementRef) { }

    ngOnInit() {
        if (this.colorCodeClia === 'PASSED') {
            this.el.nativeElement.classList.add('text-success-light');
        } else if (this.colorCodeClia === 'FAILED') {
            this.el.nativeElement.classList.add('text-danger-light');
        } else if (this.colorCodeClia === 'PENDING') {
            this.el.nativeElement.classList.add('text-purple-light');
        }

    }

}
