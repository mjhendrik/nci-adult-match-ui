import {
  Component,
  Input,
  OnInit
} from '@angular/core';

/**
 * VariantReportFilteredTableCnvComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-variant-report-filtered-table-cnv',
  templateUrl: 'variant-report-filtered-table-cnv.html'
})
export class VariantReportFilteredTableCnvComponent implements OnInit {
  @Input() items: any[];
  @Input() type: string;

  searchTerm: string = '';
  recordsPerPage: number = 10;
  defaultSort: string = 'id';
  errorMessage: string;

  itemsDisplayed: any[] = [];
  filterValue: string = 'all';

  set filter(value: string) {
    this.filterValue = value;
    this.filterItems();
  }

  get filter(): string {
    return this.filterValue;
  }

  ngOnInit() {
    this.filterItems();
  }

  filterItems() {

    if (this.filterValue === 'all') {
      this.itemsDisplayed = this.items;
    }

    if (this.filterValue === 'pass') {
      this.itemsDisplayed = this.items.filter((x: any) => x.filter === 'PASS');
    }

    if (this.filterValue === 'nocall') {
      this.itemsDisplayed = this.items.filter((x: any) => x.filter === 'NOCALL');
    }

    if (this.filterValue === 'period') {
      this.itemsDisplayed = this.items.filter((x: any) => x.filter === '.');
    }

  }

}
