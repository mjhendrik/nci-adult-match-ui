import { Pipe, PipeTransform, Injectable } from '@angular/core';
@Pipe({
    name: 'filterByText'
})
export class filterByText implements PipeTransform {
    transform(items: any[], filterText: string): any[] {
        var keys = Object.keys(items[0]);
        var pattern = keys.join('|');
        pattern = pattern + '"|{|}';
        var regex: RegExp = new RegExp(pattern, 'gi');
        return items.filter(item => {
            // console.log(JSON.stringify(item).replace(regex, ''));
            return JSON.stringify(item).replace(regex, '').toLocaleLowerCase()
                .indexOf(filterText.toLocaleLowerCase()) !== -1 ? true : false;
        }
        );
    }
}
