import { GmtPipe } from './gmt.pipe';
import * as moment from 'moment/moment';

describe('GmtPipe', () => {
    let pipe: GmtPipe;
    const momentDate = moment();
        console.log('HERE!');

    beforeEach(() => {
        pipe = new GmtPipe();
    });

    it('test', () => {
        expect(true).toEqual(true);
    });

});
