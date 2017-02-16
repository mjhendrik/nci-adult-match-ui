import { Pipe, PipeTransform, Injectable } from '@angular/core';
@Pipe({
    name: 'filterByText'
})
export class filterByText implements PipeTransform {
    transform(items: any[], filterText: string): any[] {
        var keys = Object.keys(items[0]);
        return items.filter(item => {
            return Object.keys(item).some(key => item[key].toString().toLowerCase().includes(filterText.toLowerCase()));
        }
        )
    }
}