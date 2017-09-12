import { ErrorHandler, Injectable, Inject, Injector } from '@angular/core';

@Injectable()
export class ErrorHandlingService implements ErrorHandler {
    // constructor(@Inject(Injector) private injector: Injector) {
    //     this.toastr = this.injector.get(ToastsManager);
    // }

    constructor() {
    }

    handleError(error: any) {
        const message = error.message ? error.message : error.toString();
        // this.toastyService.error(error);
        console.error(error);
        // To send logs to loggly
        // this.logglyService.push(message);
    }
}
