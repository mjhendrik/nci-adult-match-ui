import { GmtPipe } from './gmt.pipe';

fdescribe('GmtPipe', () => {
    let pipe: GmtPipe;

    beforeEach(() => {
        pipe = new GmtPipe();
    });

    fit('transforms "May 13, 2016 10:27 PM GMT" to "May 13, 2016 10:27 PM GMT"', () => {
        let value: string = 'May 13, 2016 10:27 PM GMT';
        expect(pipe.transform(value)).toEqual('May 13, 2016 10:27 PM GMT');
    });

});
