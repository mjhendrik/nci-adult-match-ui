import { Directive, ElementRef, Input, OnInit } from '@angular/core';
@Directive({ selector: '[linkExternal]', })
export class ExternalLinkDirective {

    @Input('linkExternal') linkExternal: string;

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

    constructor(private el: ElementRef) {
    }

    ngOnInit() {
        setTimeout(() => {
            if (this.el.nativeElement.innerHTML !== '-') {
                var options: any = {
                    linkType: this.linkExternal,
                    linkId: this.el.nativeElement.innerHTML
                };
                this.el.nativeElement.href = this.getLinkUrl(options);
            }
        }, 100);
    }

    getLinkUrl(options: any): string {
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

}
