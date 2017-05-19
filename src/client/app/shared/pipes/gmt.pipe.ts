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
            var val = null;
            if (format) {
                val = moment.unix(date / 1000).utc().format(format);
            } else {
                val = moment.unix(date / 1000).utc().format('LLL') + ' GMT';
            }
            console.log('Original: ' + value);
            console.log('Converted: ' + val);
            return val;
        } else {
            return '-';
        }
    }
}
