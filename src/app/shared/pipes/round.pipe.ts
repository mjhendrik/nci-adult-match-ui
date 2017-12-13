import {
    Pipe,
    PipeTransform
} from '@angular/core';
@Pipe({
    name: 'round'
})
export class RoundPipe implements PipeTransform {
    transform(value?: number): number {
        if (typeof value === 'undefined')
            return null;
        return Math.round(value * 10) / 10;
    }
}
