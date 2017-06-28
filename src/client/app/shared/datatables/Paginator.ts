import {
    Component,
    Input,
    SimpleChange,
    OnChanges,
    Optional,
    Output,
    EventEmitter
} from '@angular/core';
import {
    DataTable,
    PageEvent
} from './DataTable';

@Component({
    selector: 'mfPaginator',
    template: '<ng-content></ng-content>'
})
export class Paginator implements OnChanges {

    @Input('mfTable') inputMfTable: DataTable;
    @Output('CurrentlyActive') currentlyActive = new EventEmitter<string>();

    public activePage: number;
    public rowsOnPage: number;
    public dataLength: number = 0;
    public lastPage: number;
    public totalLength: number;
    private mfTable: DataTable;

    public constructor( @Optional() private injectMfTable: DataTable) {
    }

    public ngOnChanges(changes: { [key: string]: SimpleChange }): any {
        this.mfTable = this.inputMfTable || this.injectMfTable;
        this.onPageChangeSubscriber(this.mfTable.getPage());
        this.mfTable.onPageChange.subscribe(this.onPageChangeSubscriber);
    }

    public setPage(pageNumber: number): void {
        this.mfTable.setPage(pageNumber, this.rowsOnPage);
    }

    public setRowsOnPage(rowsOnPage: number): void {
        this.mfTable.setPage(this.activePage, rowsOnPage);
    }

    private onPageChangeSubscriber = (event: PageEvent) => {
        this.activePage = event.activePage;
        this.rowsOnPage = event.rowsOnPage;
        this.dataLength = event.dataLength;
        this.totalLength = event.totalLength;
        this.lastPage = Math.ceil(this.totalLength / this.rowsOnPage);
        this.currentlyActive.emit(this.activePage + ',' + this.rowsOnPage + ',' + this.mfTable.sortOrder + ',' + this.mfTable.sortBy);
    }

}
