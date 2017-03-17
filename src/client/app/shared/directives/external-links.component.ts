import { Component, OnInit, Input } from '@angular/core';
@Component({
    moduleId: module.id,
    selector: 'external-link',
    template: `
    <a *ngIf="isValidLink()" style="text-decoration: none;" href="{{getLinkUrl()}}" target="_blank">{{ text }}</a>
    <span *ngIf="!isValidLink()">{{ text }}</span>
  `,
})

export class ExternalLinksComponent implements OnInit {

    text: string;
    @Input('externalLink') externalLink: string;
    @Input('linkId') linkId: string;

    patterns: any = {
        cosmicFusionId: 'COSF([0-9]+)',
        cosmicId: 'COSM([0-9]+)'
    };

    urls: any = {
        cosmicId: {
            url: 'http://cancer.sanger.ac.uk/cosmic/mutation/overview?id={id}'
        },
        cosmicFusionId: {
            url: 'http://cancer.sanger.ac.uk/cosmic/fusion/summary?id={id}'
        }
    };

    options: any = {};

    ngOnInit() {
        this.text = this.linkId === null ? '-' : this.linkId;
        this.options = {
            linkId: this.linkId,
            linkType: this.externalLink
        };
    }

    getLinkUrl(): string {
        var options = this.options;
        if (!options) {
            return '#';
        }

        if (options.linkType in this.urls) {
            var id = this.getLinkId(options);
            if (id) {
                return this.urls[options.linkType].url.replace(/{id}/g, this.getLinkId(options));
            } else {
                // console.log('Invalid link ' + id);
                return '#';
            }
        } else {
            // console.log('Invalid link type ' + options.linkType);
            return '#';
        }
    }

    getLinkId(options: any): string {
        if (!options || !options.linkId || options.linkId === 0 || options.linkId === '.' || options.linkId === '-') {
            return '';
        }

        let matches: any = null;
        var patterns = options.patterns || this.patterns;

        switch (options.linkType) {
            case 'cosmicId':
                matches = options.linkId.match(new RegExp(patterns.cosmicId));
                if (matches && matches[1] !== '') {
                    return matches[1];
                } else {
                    // console.log('Invalid value for type COSMIC ID ' + options.linkId);
                    return '';
                }

            case 'cosmicFusionId':
                matches = options.linkId.match(new RegExp(patterns.cosmicFusionId));
                if (matches && matches[1] !== '') {
                    return matches[1];
                } else {
                    // console.log('Invalid value for type COSMIC Fusion ID ' + options.linkId);
                    return '';
                }

            default:
                // console.log('Invalid link type ' + options.linkType);
                return '';
        }
    }

    isValidLink(): boolean {
        var options = this.options;
        if (!options || !options.linkId || options.linkId === 0) {
            return false;
        }

        var matches: any = null;
        var patterns = this.patterns;

        switch (options.linkType) {

            case 'cosmicId':
                matches = options.linkId.match(new RegExp(patterns.cosmicId));
                if (matches && matches[1] !== '') {
                    return !!matches[1];
                } else {
                    return false;
                }

            case 'cosmicFusionId':
                matches = options.linkId.match(new RegExp(patterns.cosmicFusionId));
                if (matches && matches[1] !== '') {
                    return !!matches[1];
                } else {
                    return false;
                }

            default:
                return false;
        }
    }
}