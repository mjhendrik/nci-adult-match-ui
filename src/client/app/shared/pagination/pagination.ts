export abstract class Pagination {

    private currentPage = 0;
    private numberOfRecords: number;
    private orderByString: any[];
    private RecordsPerPage: number[];
    private paginationRange: number[];
    private totalPages:number;
    private rangeSize:number;


    constructor() {
        this.currentPage = 0;
        this.numberOfRecords = 10;
        this.orderByString = new Array(2);
        this.RecordsPerPage = [10, 25, 50, 100];
        this.orderByString.push("patientSequenceNumber");
        this.paginationRange = new Array<number>(this.rangeSize);
        //this.calculatetotalPages();
    }

    initPagination(tablelength:number):void{
        this.numberOfRecords = this.RecordsPerPage[0];
        this.currentPage = 0;
        this.setPaginationRange();
    }

    disablePrevious(): string {
        return this.currentPage === 0 ? 'disabled' : '';
    }

    disableNext(): string {
        return this.currentPage === this.totalPages ? "disabled" : "";
    }

    setTotalNumberofRecords():void{

    }

    calculatetotalPages(tablelen: number): void {
        this.totalPages = Math.ceil(tablelen / this.numberOfRecords) - 1;
    }

    setPage(page: number): void {
        this.currentPage = page;
    }

    nextPage(): void {
        if (this.currentPage < this.totalPages)
            this.currentPage++;
    }

    prevPage(): void {
        if (this.currentPage > 0)
            this.currentPage--;
    }

    pageClicked(p: number): void {
        console.log(p);
    }

    resetPaginationRange(tabIndex: number): void {
    this.currentPage = 0;
    switch (tabIndex) {
      case 1:
        this.totalPages = Math.ceil(this.table1Data.variant_reports.length / this.numberOfRecords) - 1;
        break;
      case 2:
        this.totalPages = Math.ceil(this.table2Data.assignment_reports.length / this.numberOfRecords) - 1;
        break;
      case 3:
        this.totalPages = Math.ceil(this.table3Data.length / this.numberOfRecords) - 1;
        break;
      default: this.totalPages = Math.ceil(this.table1Data.variant_reports.length / this.numberOfRecords) - 1;
        break;

    }
    console.log(this.totalPages);
    this.setPaginationRange();
  }

  setPaginationRange(): void {
    console.log("changed");

    this.paginationRange = [];

    this.start = this.currentPage;

    if (this.start > this.totalPages - this.rangeSize) {

      this.start = this.totalPages - this.rangeSize + 1;

    }

    for (var i = this.start; i < this.start + this.rangeSize; i++) {
      if (i >= 0)
        this.paginationRange.push(i);
    }
  }

  lastPage(): void { // remove_this
    this.currentPage = this.totalPages;
  }

  firstPage(): void { // remove_this
    this.currentPage = 0;
    console.log(this.currentPage);
  }


  orderByColumn(key: string): void {
    this.orderByString.length = 0;
    this.orderByString.push(key);
  }

  setTab(tabIndex: number): void {

    switch (tabIndex) {
      case 1:
        this.calculatetotalPages(this.table1Data.variant_reports.length);
        break;
      case 2:
        this.calculatetotalPages(this.table2Data.assignment_reports.length);
        break;
      case 3:
        this.calculatetotalPages(this.table3Data.length);
        break;
      default: this.calculatetotalPages(this.table1Data.variant_reports.length);
        break;

    }
  }

}