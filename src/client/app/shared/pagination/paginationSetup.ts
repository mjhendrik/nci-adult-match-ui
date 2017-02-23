export abstract class Pagination {

    public currentPage: number;
    public numberOfRecords: number;
    public orderByString: any[];
    public RecordsPerPage: number[];
    public paginationRange: number[];
    public totalPages: number;
    public rangeSize: number;


    constructor() {
        this.currentPage = 0;
        this.orderByString = new Array(2);
        this.RecordsPerPage = [10, 25, 50, 100];
        this.numberOfRecords = this.RecordsPerPage[0];
        this.rangeSize = 4;
        this.orderByString.push("patientSequenceNumber");
        this.paginationRange = new Array<number>(this.rangeSize);
        //this.calculatetotalPages();
    }

    resetRecordsPerpage():void{
        this.numberOfRecords = this.RecordsPerPage[0];
    }

    initPagination(tablelength: number): void {
        this.currentPage = 0;
        this.calculatetotalPages(tablelength);
        this.generatePageNumbers();
    }

    disablePrevious(): string {
        return this.currentPage === 0 ? 'disabled' : '';
    }

    disableNext(): string {
        return this.currentPage === this.totalPages ? "disabled" : "";
    }

    setTotalNumberofRecords(): void {

    }

    calculatetotalPages(tablelen: number): void {
        // console.log(Math.ceil(tablelen / this.numberOfRecords));
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
        // console.log(p);
    }



    generatePageNumbers(): void {

        this.paginationRange = [];
        let start = this.currentPage;

        if (start > this.totalPages - this.rangeSize) {

            start = this.totalPages - this.rangeSize + 1;

        }

        for (var i = start; i < start + this.rangeSize; i++) {
            if (i >= 0)
                this.paginationRange.push(i);
        }
    }

    lastPage(): void { // remove_this
        this.currentPage = this.totalPages;
    }

    firstPage(): void { // remove_this
        this.currentPage = 0;
        // console.log(this.currentPage);
    }


     orderByColumn(key: string): void {
        this.orderByString.length = 0;
        this.orderByString.push(key);
    }

}