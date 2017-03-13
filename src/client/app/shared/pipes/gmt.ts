import { Pipe, PipeTransform, Injectable } from '@angular/core';
import * as moment from 'moment/moment';
@Pipe({
    name: 'gmt'
})
export class GMTFilter implements PipeTransform {
    transform(date: number): string {
        if (date !== undefined && date) {
            return moment.unix(date / 1000).utc().format('LLL') + ' GMT';
        } else {
            return '-';
        }
    }
}
