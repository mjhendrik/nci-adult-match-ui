import { Component, Input, OnChanges, OnInit } from "@angular/core";
import { DataTable } from "./DataTable";
import * as _ from "lodash";

@Component({
    selector: "mfBootstrapPaginator",
    template: `
    <mfPaginator #p [mfTable]="mfTable">
        <div>
            <div class="dataTables_info" id="data-table_info" style="margin: 30px 0 0 0;" *ngIf="p.dataLength!=0 && (searchTerm==undefined || searchTerm.length==0)">
                Showing {{p.dataLength==0 ? 0 : (p.activePage-1)*(p.rowsOnPage)+1}} to 
                {{ p.dataLength < (p.activePage-1)*(p.rowsOnPage)+p.rowsOnPage ? p.dataLength: (p.activePage-1)*(p.rowsOnPage)+p.rowsOnPage}} of {{p.dataLength}}
                          entries
            </div>
            <div class="dataTables_info" id="data-table_info" style="margin: 30px 0 0 0;" *ngIf="p.dataLength!=0 && searchTerm!=undefined && searchTerm.length!=0">
                Showing {{p.dataLength==0 ? 0 : (p.activePage-1)*(p.rowsOnPage)+1}} to 
                {{ p.dataLength < (p.activePage-1)*(p.rowsOnPage)+p.rowsOnPage ? p.dataLength: (p.activePage-1)*(p.rowsOnPage)+p.rowsOnPage}} of {{p.dataLength}}
                          entries (filtered from {{totallength}} total entries)
            </div>
        </div>
        <ul style="margin-bottom: 0;" class="pagination pull-right" *ngIf="p.dataLength > p.rowsOnPage">
            <li class="page-item" [class.disabled]="p.activePage <= 1" (click)="p.setPage(1)">
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
            <li class="page-item" [class.disabled]="p.activePage >= p.lastPage" (click)="p.setPage(p.lastPage)">
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
export class BootstrapPaginator implements OnChanges, OnInit {
    @Input("rowsOnPageSet") rowsOnPageSet: any[] = [];
    @Input("mfTable") mfTable: DataTable;
    @Input("search") searchTerm: string;
    @Input("totallength") totallength: string;

    minRowsOnPage = 0;

    ngOnChanges(changes: any): any {
        if (changes.rowsOnPageSet) {
            this.minRowsOnPage = _.min(this.rowsOnPageSet)
        }
    }

    ngOnInit(): void {
    }

}