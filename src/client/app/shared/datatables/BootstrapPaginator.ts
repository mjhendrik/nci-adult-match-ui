import {
    Component,
    Input,
    OnChanges,
    Output,
    EventEmitter
} from '@angular/core';
import { DataTable } from './DataTable';
import * as _ from 'lodash';

@Component({
    selector: 'mfBootstrapPaginator',
    template: `
    <style>
        li.disabled a, li.disabled {
            pointer-events:none;
            cursor:default !important;
        }
    </style>    
    <mfPaginator #p [mfTable]="mfTable" (CurrentlyActive)="currentlyActive($event)">
        <div>
            <div class="dataTables_info" id="data-table_info" style="margin: 30px 0 0 0;" *ngIf="p.totalLength!=0 && (searchTerm==undefined || searchTerm.length==0)">
                Showing {{p.totalLength==0 ? 0 : (p.activePage-1)*(p.rowsOnPage)+1}} to 
                {{ p.totalLength < (p.activePage-1)*(p.rowsOnPage)+p.rowsOnPage ? p.totalLength: (p.activePage-1)*(p.rowsOnPage)+paginationParse(p.rowsOnPage)}} of {{p.totalLength}}
                          entries
            </div>
            <div class="dataTables_info" id="data-table_info" style="margin: 30px 0 0 0;" *ngIf="p.totalLength!=0 && searchTerm!=undefined && searchTerm.length!=0">
                Showing {{p.totalLength==0 ? 0 : (p.activePage-1)*(p.rowsOnPage)+1}} to 
                {{ p.totalLength < (p.activePage-1)*(p.rowsOnPage)+p.rowsOnPage ? p.totalLength: (p.activePage-1)*(p.rowsOnPage)+paginationParse(p.rowsOnPage)}} of {{p.totalLength}}
                          entries (filtered from {{totalPageCount === undefined ? p.totalLength : totalPageCount}} total entries)
            </div>
        </div>
        <ul style="margin-bottom: 0;" class="pagination pull-right" *ngIf="p.totalLength > p.rowsOnPage">
            <li class="page-item" [class.disabled]="p.activePage <= 1" (click)="p.setPage(p.activePage - 1)">
                <a class="page-link" style="cursor: pointer">Previous</a>
            </li>
            <li class="page-item" *ngIf="p.activePage > 4 && p.activePage + 1 > p.lastPage" (click)="p.setPage(p.activePage - 4)">
                <a class="page-link" style="cursor: pointer">{{p.activePage-4}}</a>
            </li>
            <li class="page-item" *ngIf="p.activePage > 3 && p.activePage + 2 > p.lastPage" (click)="p.setPage(p.activePage - 3)">
                <a class="page-link" style="cursor: pointer">{{p.activePage-3}}</a>
            </li>
            <li class="page-item" *ngIf="p.activePage > 2" (click)="p.setPage(p.activePage - 2)">
                <a class="page-link" style="cursor: pointer">{{p.activePage-2}}</a>
            </li>
            <li class="page-item" *ngIf="p.activePage > 1" (click)="p.setPage(p.activePage - 1)">
                <a class="page-link" style="cursor: pointer">{{p.activePage-1}}</a>
            </li>
            <li class="page-item active">
                <a class="page-link" style="cursor: pointer">{{p.activePage}}</a>
            </li>
            <li class="page-item" *ngIf="p.activePage + 1 <= p.lastPage" (click)="p.setPage(p.activePage + 1)">
                <a class="page-link" style="cursor: pointer">{{p.activePage+1}}</a>
            </li>
            <li class="page-item" *ngIf="p.activePage + 2 <= p.lastPage" (click)="p.setPage(p.activePage + 2)">
                <a class="page-link" style="cursor: pointer">{{p.activePage+2}}</a>
            </li>
            <li class="page-item" *ngIf="p.activePage + 3 <= p.lastPage && p.activePage < 3" (click)="p.setPage(p.activePage + 3)">
                <a class="page-link" style="cursor: pointer">{{p.activePage+3}}</a>
            </li>
            <li class="page-item" *ngIf="p.activePage + 4 <= p.lastPage && p.activePage < 2" (click)="p.setPage(p.activePage + 4)">
                <a class="page-link" style="cursor: pointer">{{p.activePage+4}}</a>
            </li>   
            <li class="page-item" [class.disabled]="p.activePage >= p.lastPage" (click)="p.setPage(p.activePage + 1)">
                <a class="page-link" style="cursor: pointer">Next</a>
            </li>
        </ul>
        <ul style="margin-bottom: 0;" class="pagination pull-right float-sm-right" *ngIf="false">
            <li class="page-item" *ngFor="let rows of rowsOnPageSet" [class.active]="p.rowsOnPage===rows" (click)="p.setRowsOnPage(rows)">
                <a class="page-link" style="cursor: pointer">{{rows}}</a>
            </li>
        </ul>
    </mfPaginator>
    `
})
export class BootstrapPaginator implements OnChanges {
    @Input('rowsOnPageSet') rowsOnPageSet: any[] = [];
    @Input('mfTable') mfTable: DataTable;
    @Input('search') searchTerm: string;
    @Input('totallength') totallength: string;
    @Input('totalPageCount') totalPageCount: string;
    @Output('CurrentlyActive') currentActiveData = new EventEmitter<string>();

    minRowsOnPage = 0;

    ngOnChanges(changes: any): any {
        if (changes.rowsOnPageSet) {
            this.minRowsOnPage = _.min(this.rowsOnPageSet);
        }
    }

    paginationParse(value: string): number {
        return parseInt(value);
    }

    currentlyActive(evt: any): void {
        this.currentActiveData.emit(evt);
    }

}
