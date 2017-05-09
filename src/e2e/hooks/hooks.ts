import { binding, before, after } from "cucumber-tsflow";

@binding()
export class Hooks {
    @before()
    public beforeAllScenarios(): void {
    }
}
