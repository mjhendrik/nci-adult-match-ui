import { ElementRef, Predicate } from '@angular/core';

export interface CssClassComparer<T> {
    evaluate: Predicate<T>;
    cssClass: string;
}

export abstract class ColorCodeDirective<T> {
    protected evaluators: CssClassComparer<T>[] = [];
    protected value?: T;

    constructor(
        protected el: ElementRef,
        evaluators: CssClassComparer<T>[],
        private defaultCssClass?: string) {
        this.evaluators = evaluators;
    }

    protected resetColor() {
        for (const evaluator of this.evaluators) {
            this.el.nativeElement.classList.remove(evaluator.cssClass);
        }

        if (this.defaultCssClass)
            this.el.nativeElement.classList.remove(this.defaultCssClass);
    }

    protected setColor() {
        this.resetColor();

        for (const evaluator of this.evaluators || []) {
            let matches = evaluator.evaluate(this.value);
            if (matches) {
                this.el.nativeElement.classList.add(evaluator.cssClass);
                return;
            }
        }

        if (this.defaultCssClass) {
            this.el.nativeElement.classList.add(this.defaultCssClass);
        }
    }
}
