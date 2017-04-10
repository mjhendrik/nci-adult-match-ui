import {
    Pipe,
    PipeTransform
} from '@angular/core';
import * as moment from 'moment/moment';
@Pipe({
    name: 'gmt'
})
export class GMTFilter implements PipeTransform {
    transform(inputdate: string): string {
        let date: number;
        if (inputdate !== undefined && inputdate !== null) {
            inputdate = inputdate.toString();
            if (inputdate.indexOf('-') === -1) {
                date = parseInt(inputdate);
            } else {
                date = new Date(inputdate).getTime();
            }
            return moment.unix(date / 1000).utc().format('LLL') + ' GMT';
        } else {
            return '-';
        }
    }
}
