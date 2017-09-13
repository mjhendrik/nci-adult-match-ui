import { ErrorHandler, Injectable, Inject, Injector } from '@angular/core';
import { ToastrService } from './toastr.service';

@Injectable()
export class ErrorHandlingService implements ErrorHandler {
    constructor(private toastrService: ToastrService) { }

    handleError(error: any) {
        console.debug('Error handling service called');
        const message = error.message ? error.message : error.toString();

        if (this.toastrService) {
        console.debug('We have toastrService');
        
            // const toastrService = this.injector.get(ToastrService);
            // if (toastrService) {
                const toastr = this.toastrService.toastr;
                // this.toastyService.error(error);
                if (toastr) {
                    console.debug('We have toastr');
                    toastr.error(message);
                }

                // To send logs to loggly
                // this.logglyService.push(message);
            // }
        }
    }
}
