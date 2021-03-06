// import { ComponentRef, TemplateRef, EventEmitter } from '@angular/core';
// import { ComponentLoaderFactory } from '../component-loader/component-loader.factory';
// import { ModalBackdropComponent } from './modal-backdrop.component';
// import { BsModalRef, ModalOptions } from './modal-options.class';

import { EventEmitter, TemplateRef, Injectable } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';

@Injectable()
export class BsModalServiceStub {
    private clf: any;
    private reason: string;
    // config: ModalOptions;
    // onShow: EventEmitter<any>;
    // onShown: EventEmitter<any>;
    // onHide: EventEmitter<any>;
    // tslint:disable-next-line:member-ordering
    onHidden: EventEmitter<any> = new EventEmitter();
    // protected isBodyOverflowing: boolean;
    // protected originalBodyPadding: number;
    // protected scrollbarWidth: number;
    // protected backdropRef: ComponentRef<ModalBackdropComponent>;
    // private _backdropLoader;
    // private modalsCount;
    // private lastDismissReason;
    // private loaders;
    // constructor(clf: ComponentLoaderFactory);
    // /** Shows a modal */
    show(content: string | TemplateRef<any> | any, config?: any): BsModalRef {
        let modal = new BsModalRef();
        modal.content = content;
        return modal;
    }
    hide(level: number): void { ; }
    // _showBackdrop(): void;
    // _hideBackdrop(): void;
    // _showModal(content: any): BsModalRef;
    // _hideModal(level: number): void;
    // getModalsCount(): number;
    setDismissReason(reason: string): void {
        this.reason = reason;
    }
    // protected removeBackdrop(): void;
    // setScrollbar(): void;
    // private resetScrollbar();
    // private getScrollbarWidth();
    // private _createLoaders();
    // private removeLoaders(level);
    // private copyEvent(from, to);
}
