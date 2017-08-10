import { KeysPipe } from './keys.pipe';

export function main() {
    describe('Pipe: Default', () => {
        let pipe: KeysPipe;

        beforeEach(() => {
            pipe = new KeysPipe();
        });

        it('providing empty object returns empty array', () => {
            expect(pipe.transform({}, null)).toEqual([]);
        });

        it('providing an object returns array of key-value objects', () => {
            const input = { someKey1: 'someValue1', 'some Key1': 'some Value 2' };
            const expected = [
                { key: 'someKey1', value: 'someValue1' },
                { key: 'some Key1', value: 'some Value 2' }
            ];

            expect(pipe.transform(input, null)).toEqual(expected);
        });
    });
}
