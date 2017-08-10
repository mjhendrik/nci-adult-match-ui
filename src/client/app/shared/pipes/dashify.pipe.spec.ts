import { DashifyPipe } from './dashify.pipe';

export function main() {
    describe('Pipe: Default', () => {
        let pipe: DashifyPipe;

        beforeEach(() => {
            pipe = new DashifyPipe();
        });

        it('providing null returns "-"', () => {
            expect(pipe.transform(null)).toEqual('-');
        });

        it('providing empty string returns "-"', () => {
            expect(pipe.transform('')).toEqual('-');
        });

        it('providing undefined string returns "-"', () => {
            expect(pipe.transform(undefined)).toEqual('-');
        });

        it('providing 0 string returns 0', () => {
            expect(pipe.transform(0)).toEqual(0);
        });

        it('providing "0" string returns "0"', () => {
            expect(pipe.transform('0')).toEqual('0');
        });

        it('providing a non-empty value returns the same value', () => {
            expect(pipe.transform('ABC')).toEqual('ABC');
        });
    });
}
