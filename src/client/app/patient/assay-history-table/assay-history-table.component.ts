import {
  Component,
  Input
} from '@angular/core';

export class AssayHistoryItem {
  gene: string;
  orderedDate: string;
  reportedDate: string;
  result: string;
  comment: string;
}

/**
 * AssayHistoryTableComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-assay-history-table',
  styleUrls: ['assay-history-table.component.css'],
  templateUrl: 'assay-history-table.component.html'
})
export class AssayHistoryTableComponent {
  @Input() items: AssayHistoryItem[];

  parseGeneFromAssay(gene: string) {
    var replacer = function (match: any, p1: any, p2: any, p3: any, offset: any, val: any) {
      return p2;
    };

    try {
      var regExp = /^(ICC)([A-Za-z0-9_-]*)(s)$/; // Parse out 'ICC' at the start of the value and 's' at the end, all case-sensitive

      if (!gene || (typeof gene !== 'string'))
        return gene;

      return gene.replace(regExp, replacer);
    } catch (error) {
      return gene;
    }
  }
}
