import { KeysPipe } from './keys.pipe';

export function main() {
  describe('Pipe: Filter-by-text', () => {
    let pipe: KeysPipe;

    beforeEach(() => {
      pipe = new KeysPipe();
    });

    it('providing empty transform', () => {
      expect(pipe.transform([], null)).toEqual([]);
    });

    it('providing an object returns array of key-value objects', () => {
      const items = ['someValue1', 'some Value 2'];
      const filterText = ['someValue1'];
      pipe.transform(items, filterText);
      // expect(pipe.transform(input, null)).toEqual(expected);
    });
  });
}
