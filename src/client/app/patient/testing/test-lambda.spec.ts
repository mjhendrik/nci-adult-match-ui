import { TestLambda } from './test-lambda';

export function main() {
    xdescribe('view data transformer api service test', () => {
        let sut: TestLambda;

        beforeEach(() => {
            sut = new TestLambda();
        });

        it('can call the lambda', () => {
            let testVar = sut.test(1);
            expect(testVar).toEqual(124);
        });
    });
}
