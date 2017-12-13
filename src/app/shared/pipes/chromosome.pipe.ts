import {
    Pipe,
    PipeTransform
} from '@angular/core';
@Pipe({
    name: 'chromosome'
})
export class ChromosomePipe implements PipeTransform {
    transform(value?: any): any {
        if (typeof value === 'undefined' || value === null)
            return null;

        if (typeof value !== 'string')
            return value;

        const textToRemove = 'chr';

        return value.startsWith(textToRemove) ? value.substr(textToRemove.length): value;
    }
}
