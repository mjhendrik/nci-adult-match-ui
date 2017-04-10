import {
    Pipe,
    PipeTransform
} from '@angular/core';
@Pipe({
    name: 'dashify'
})
export class DashifyPipe implements PipeTransform {
    transform(text: string): string {
        return text ? text : '-';
    }
}
