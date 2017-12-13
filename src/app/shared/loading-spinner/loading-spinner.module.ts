import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadingSpinnerComponent } from './loading-spinner.component';

export interface LoadableData<T> {
    isLoading: boolean;
    data: T;
}

@NgModule({
    imports: [CommonModule],
    declarations: [LoadingSpinnerComponent],
    exports: [LoadingSpinnerComponent]
})
export class LoadingSpinnerModule {}
