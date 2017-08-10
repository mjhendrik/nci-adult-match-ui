import { Directive, ElementRef, Input } from '@angular/core';

@Directive({ selector: '[colorCodeAssignment]' })
export class ColorCodeAssignmentDirective {
    private colorCodeAssignmentValue?: string = null;

    @Input() set colorCodeAssignment(value: string) {
        this.colorCodeAssignmentValue = value;
        this.setColor();
    }
    get colorCodeAssignment(): string {
        return this.colorCodeAssignmentValue;
    }

    constructor(private el: ElementRef) { }

    private setColor() {
        if (this.colorCodeAssignment === 'CONFIRMED') {
            this.el.nativeElement.classList.add('text-success-light');
        } else if (this.colorCodeAssignment === 'PENDING_CONFIMATION') {
            this.el.nativeElement.classList.add('text-info-light');
        } else if (this.colorCodeAssignment === 'REJECTED') {
            this.el.nativeElement.classList.add('text-danger-light');
        } else if (this.colorCodeAssignment === 'NO_ARM_ASSIGNED') {
            this.el.nativeElement.classList.add('text-danger-light');
        }
    }
}
