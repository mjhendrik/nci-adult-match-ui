import { ChromosomePipe } from './chromosome.pipe';

export function main() {
    describe('chromosome pipe', () => {
        let pipe: ChromosomePipe;

        beforeEach(() => {
            pipe = new ChromosomePipe();
        });

        it('should return null if there is no value is supplied', () => {
            expect(pipe.transform(undefined)).toBeNull();
            expect(pipe.transform(null)).toBeNull();
        });

        it('should return empty string if empty string is supplied', () => {
            expect(pipe.transform('')).toEqual('');
        });

        it('should return non-string value as is', () => {
            expect(pipe.transform(123)).toBe(123);
            expect(pipe.transform(0)).toBe(0);
            const date = new Date();
            expect(pipe.transform(date)).toBe(date);
        });

        it('should remove text `chr` if the value has it', () => {
            expect(pipe.transform('chr7')).toEqual('7');
        });

        it('should not change the value if it doesn\'t start with `chr`', () => {
            expect(pipe.transform('some-value')).toEqual('some-value');
        });
    });
}
