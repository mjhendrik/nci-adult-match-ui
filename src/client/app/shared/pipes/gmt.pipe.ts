import {
    Pipe,
    PipeTransform
} from '@angular/core';

import * as moment from 'moment/moment';

@Pipe({
    name: 'gmt'
})
export class GmtPipe implements PipeTransform {
    transform(value: any, format: string = null): string {
        // Check if it's the Mongo DB date
        if (value && typeof value === 'object' && '$date' in value) {
            value = value['$date'];
        }

        let date: number;
        if (value !== undefined && value !== null) {
            value = value.toString();
            if (value.indexOf('-') === -1) {
                date = parseInt(value);
            } else {
                date = new Date(value).getTime();
            }
            if (format) {
                if (date.toString().length > 10) return moment.unix(date / 1000).utc().format(format);
                else return moment.unix(date).utc().format(format);
            } else {
                if (date.toString().length > 10) return moment.unix(date / 1000).utc().format('LLL') + ' GMT';
                else return moment.unix(date).utc().format('LLL') + ' GMT';
            }
        } else {
            return '-';
        }
    }
}
