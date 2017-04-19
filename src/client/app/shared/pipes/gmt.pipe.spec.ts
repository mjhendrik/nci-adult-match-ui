import { GmtPipe } from './gmt.pipe';
import * as moment from 'moment/moment';

describe('GmtPipe', () => {
    let pipe: GmtPipe;
    const momentDate = moment();

    beforeEach(() => {
        pipe = new GmtPipe();
    });

    it('dummy test', () => {
        expect(true).toEqual(true);
    });

});
