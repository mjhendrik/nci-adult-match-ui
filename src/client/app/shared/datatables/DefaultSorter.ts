import {
    Component,
    Input,
    OnInit,
    Output,
    EventEmitter
} from '@angular/core';
import {
    DataTable,
    SortEvent
} from './DataTable';

@Component({
    selector: 'mfDefaultSorter',
    template: `
        <a style='cursor: pointer; color: #ffffff; text-decoration: none;' (click)='sort()' class='text-nowrap'>
            <ng-content></ng-content>&nbsp;
            <span *ngIf='isSortedByMeAsc' class='fa fa-sort-amount-asc' aria-hidden='true'></span>
            <span *ngIf='isSortedByMeDesc' class='fa fa-sort-amount-desc' aria-hidden='true'></span>
        </a>`
})
export class DefaultSorter implements OnInit {
    @Input('by') sortBy: string;
    @Output('SortStatus') SortStatus = new EventEmitter<string>();

    isSortedByMeAsc: boolean = false;
    isSortedByMeDesc: boolean = false;

    public constructor(private mfTable: DataTable) {
    }

    public ngOnInit(): void {
        this.mfTable.onSortChange.subscribe((event: SortEvent) => {
            this.isSortedByMeAsc = (event.sortBy === this.sortBy && event.sortOrder === 'asc');
            this.isSortedByMeDesc = (event.sortBy === this.sortBy && event.sortOrder === 'desc');
        });
    }

    sort() {
        if (this.isSortedByMeAsc) {
            this.mfTable.setSort(this.sortBy, 'desc');
        } else {
            this.mfTable.setSort(this.sortBy, 'asc');
        }
        this.SortStatus.emit(this.mfTable.activePage + ',' + this.mfTable.rowsOnPage + ',' + this.mfTable.sortOrder + ','
            + this.mfTable.sortBy);
    }
}
