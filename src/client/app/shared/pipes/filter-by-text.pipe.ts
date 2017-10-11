import {
    Pipe,
    PipeTransform
} from '@angular/core';
@Pipe({
    name: 'filterByText'
})
export class FilterByTextPipe implements PipeTransform {
    transform(items: any[], filterText: string): any[] {
        if (!items || items.length === 0)
            return items;
        var keys = Object.keys(items[0]);
        var pattern = keys.join('|');
        pattern = pattern + '"|{|}';
        var regex: RegExp = new RegExp(pattern, 'i');
        return items.filter(item => {
            return JSON.stringify(item).replace(regex, '').toLocaleLowerCase()
                .indexOf(filterText.toLocaleLowerCase()) !== -1 ? true : false;
        }
        );
    }
}
