import { Pipe, PipeTransform, Injectable } from '@angular/core';
@Pipe({
    name: 'filterByText'
})
export class filterByText implements PipeTransform {
    transform(items: any[], filterText: string): any[] {
        var keys = Object.keys(items[0]);
        return items.filter(item => {
            return JSON.stringify(item).toLocaleLowerCase().indexOf(filterText.toLocaleLowerCase()) != -1 ? true : false;
        }
        );
    }
}
