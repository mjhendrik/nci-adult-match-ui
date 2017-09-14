import { ErrorHandler, Injectable } from '@angular/core';
import { ToastrService } from './toastr.service';

@Injectable()
export class ErrorHandlingService implements ErrorHandler {
    constructor(private toastrService: ToastrService) { }

    handleError(error: any) {
        const message = error.message ? error.message : error.toString();
        if (this.toastrService && this.toastrService.toastr) {
            this.toastrService.toastr.error(message, 'Unexpected Error');
        }
        console.error(error);
    }
}
