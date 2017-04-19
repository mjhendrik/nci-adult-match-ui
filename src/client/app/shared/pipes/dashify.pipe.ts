import {
    Pipe,
    PipeTransform
} from '@angular/core';
@Pipe({
    name: 'dashify'
})
export class DashifyPipe implements PipeTransform {
    transform(text: any): string {
        return (text || text === 0) ? text : '-';
    }
}
