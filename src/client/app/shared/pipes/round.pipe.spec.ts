import { RoundPipe } from './round.pipe';

export function main() {
    describe('Pipe: Default', () => {
        let pipe: RoundPipe;

        beforeEach(() => {
            pipe = new RoundPipe();
        });

        it('10 will round to 10', () => {
            expect(pipe.transform(10)).toEqual(10);
        });

        it('10.09 will round to 10.1', () => {
            expect(pipe.transform(10.09)).toEqual(10.1);
        });

        it('10.009 will round to 10', () => {
            expect(pipe.transform(10.009)).toEqual(10);
        });

        it('10.05 will round to 10', () => {
            expect(pipe.transform(10.05)).toEqual(10.1);
        });

    });
}
