import { ErrorHandler, Injectable } from '@angular/core';
import { LogglyService } from 'ngx-loggly-logger';

@Injectable()
export class ErrorHandlingService implements ErrorHandler {

    constructor(private logglyService: LogglyService) {
        // Init to set key and tag and sendConsoleErrors boolean
        logglyService.push({
            'logglyKey': 'Your Loggly Key goes here',
            'sendConsoleErrors': true, // Optional set true to send uncaught console errors
            'tag': 'loggly-logger'
        });
    }

    handleError(error: any) {
        const message = error.message ? error.message : error.toString();
        // To send logs to loggly
        this.logglyService.push(message);
    }
}
