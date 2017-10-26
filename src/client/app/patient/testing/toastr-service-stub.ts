import { Injectable } from '@angular/core';

export class ToastsManagerMock {
    error(message: string, title?: string, options?: any): any { return null; }
    info(message: string, title?: string, options?: any): any { return null; }
    success(message: string, title?: string, options?: any): any { return null; }
    warning(message: string, title?: string, options?: any): any { return null; }
    custom(message: string, title?: string, options?: any): any { return null; }
}

@Injectable()
export class ToastrServiceStub {
    toastr: ToastsManagerMock;
}
