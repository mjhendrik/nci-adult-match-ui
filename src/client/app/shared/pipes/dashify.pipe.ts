import {
    Pipe,
    PipeTransform,
    Injectable
} from '@angular/core';
@Pipe({
    name: 'dashify'
})
export class dashify implements PipeTransform {
    transform(text: string): string {
        return text ? text : '-';
    }
}
