import { Component, Input } from '@angular/core';


export enum LinkType {
    geneId = 1,
    cosmicId = 2,
    cosmicFusionId = 3
}

interface StringToStringMap {
    [key: string]: string;
}

@Component({
    moduleId: module.id,
    selector: 'external-link',
    template: `
    <a *ngIf="isValidLink()" style="text-decoration: none;" href="{{getLinkUrl()}}" target="_blank" rel="noopener noreferrer">{{ text }}</a>
    <span *ngIf="!isValidLink()">{{ text }}</span>
  `,
})
export class ExternalLinksComponent {

    text: string;

    @Input('linkType') linkType?: LinkType;

    private linkIdValue: string;
    @Input()
    set linkId(value: string) {
        this.linkIdValue = value;
        this.text = (value && value.trim()) || '-';
    }
    get linkId(): string { return this.linkIdValue; }

    private urls: StringToStringMap = {
        'cosmicId': 'http://cancer.sanger.ac.uk/cosmic/mutation/overview?id={id}',
        'cosmicFusionId': 'http://cancer.sanger.ac.uk/cosmic/fusion/summary?id={id}',
        'geneId': 'http://cancer.sanger.ac.uk/cosmic/gene/analysis?ln={id}',
    };

    private patterns: StringToStringMap = {
        'cosmicId': 'COSM([0-9]+)',
        'cosmicFusionId': 'COSF([0-9]+)',
    };

    getLinkUrl(): string {
        if (!this.linkType || !this.linkId) {
            return '#';
        }

        if (this.linkType in this.urls) {
            var id = this.getLinkId();
            if (id) {
                return this.urls[this.linkType].replace(/{id}/g, this.getLinkId());
            } else {
                return '#';
            }
        } else {
            return '#';
        }
    }

    isValidLink(): boolean {
        if (!this.linkType || !this.linkId) {
            return false;
        }

        var matches: any = null;

        switch (this.linkType) {
            case LinkType.cosmicId:
                matches = this.linkId.match(new RegExp(this.patterns['cosmicId']));
                if (matches && matches[1] !== '') {
                    return !!matches[1];
                } else {
                    return false;
                }

            case LinkType.cosmicFusionId:
                matches = this.linkId.match(new RegExp(this.patterns['cosmicFusionId']));
                if (matches && matches[1] !== '') {
                    return !!matches[1];
                } else {
                    return false;
                }

            case LinkType.geneId:
                return true;

            default:
                return false;
        }
    }

    private getLinkId(): string {
        let matches: any = null;

        switch (this.linkType) {
            case LinkType.cosmicId:
                matches = this.linkId.match(new RegExp(this.patterns['cosmicId']));
                if (matches && matches[1] !== '') {
                    return matches[1];
                } else {
                    return '';
                }

            case LinkType.cosmicFusionId:
                matches = this.linkId.match(new RegExp(this.patterns['cosmicFusionId']));
                if (matches && matches[1] !== '') {
                    return matches[1];
                } else {
                    return '';
                }

            case LinkType.geneId:
                return this.linkId;

            default:
                return '';
        }
    }    
}
