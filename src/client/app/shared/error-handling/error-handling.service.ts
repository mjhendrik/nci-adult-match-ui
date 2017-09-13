import { ErrorHandler, Injectable, Inject, Injector } from '@angular/core';

@Injectable()
export class ErrorHandlingService implements ErrorHandler {
    // constructor(@Inject(Injector) private injector: Injector) {
    //     this.toastr = this.injector.get(ToastsManager);
    // }

    // constructor(private service: NotificationsService) { }

    handleError(error: any) {
        const message = error.message ? error.message : error.toString();
        // this.toastyService.error(error);
        console.debug('Error handling service called');
        // this.service.error(error);
        // To send logs to loggly
        // this.logglyService.push(message);
    }
}

