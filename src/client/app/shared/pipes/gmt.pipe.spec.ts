import { GmtPipe } from './gmt.pipe';

export function main() {
    describe('Pipe: Default', () => {
        let pipe: GmtPipe;

        beforeEach(() => {
            pipe = new GmtPipe();
        });

        it('providing null returns "-"', () => {
            expect(pipe.transform(null)).toEqual('-');
        });

        it('providing a MongoDB date object returns a valid GMT date', () => {
            const input = {$date: 1439843678000};
            const expected = 'August 17, 2015 8:34 PM GMT';

            expect(pipe.transform(input)).toEqual(expected);
        });

        it('providing a MongoDB date object with format returns a formatted GMT date', () => {
            const input = {$date: 1439843678000};
            const expected = '2015-08-17';

            expect(pipe.transform(input, 'YYYY-MM-DD')).toEqual(expected);
        });

        it('providing a UTC date returns a GMT date', () => {
            const input = '2013-08-30T19:52:28.226Z';
            const expected = 'August 30, 2013 7:52 PM GMT';

            expect(pipe.transform(input)).toEqual(expected);
        });

        it('providing a UTC date with format returns a formatted GMT date', () => {
            const input = '2013-08-30T19:52:28.226Z';
            const expected = '2013-08-30';

            expect(pipe.transform(input, 'YYYY-MM-DD')).toEqual(expected);
        });

        it('providing a UNIX epoch date returns a valid GMT date', () => {
            const input = 1440086779000;
            const expected = 'August 20, 2015 4:06 PM GMT';

            expect(pipe.transform(input)).toEqual(expected);
        });
    });
}
