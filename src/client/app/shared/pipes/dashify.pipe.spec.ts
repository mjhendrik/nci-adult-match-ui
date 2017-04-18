import { Pipe, PipeTransform } from '@angular/core';

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

    it('transforms null to "-"', () => {
        let value: string = null;
        expect(pipe.transform(value)).toEqual('-');
    });

    it('transforms undefined to "-"', () => {
        let value: string = undefined;
        expect(pipe.transform(value)).toEqual('-');
    });

});
