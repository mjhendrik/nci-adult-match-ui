import { DashifyPipe } from './dashify.pipe';

fdescribe('DashifyPipe', () => {
    let pipe: DashifyPipe;

    beforeEach(() => {
        pipe = new DashifyPipe();
    });

    it('transforms "abc" to "abc"', () => {
        let value: string = 'abc';
        expect(pipe.transform(value)).toEqual('abc');
    });

    it('transforms "" to "-"', () => {
        let value: string = '';
        expect(pipe.transform(value)).toEqual('-');
    });

    it('transforms 0 to 0', () => {
        let value: any = 0;
        expect(pipe.transform(value)).toEqual(0);
    });

    it('transforms 1 to 1', () => {
        let value: any = 1;
        expect(pipe.transform(value)).toEqual(1);
    });

    it('transforms null to "-"', () => {
        let value: string = null;
        expect(pipe.transform(value)).toEqual('-');
    });

    it('transforms undefined to "-"', () => {
        let value: string = undefined;
        expect(pipe.transform(value)).toEqual('-');
    });

});
