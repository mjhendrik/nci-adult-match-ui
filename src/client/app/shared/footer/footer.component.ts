import {
    Location,
    LocationStrategy,
    PathLocationStrategy
} from '@angular/common';
import {
    Component,
    Inject,
    OnInit
} from '@angular/core';
import { Auth } from './../auth/auth.service';
import { ConfigApiService } from './../config/config-api.service';
import { DOCUMENT } from '@angular/platform-browser';
/**
 * This class represents the footer component.
 */
@Component({
    providers: [Location, { provide: LocationStrategy, useClass: PathLocationStrategy }],
    moduleId: module.id,
    selector: 'sd-footer',
    templateUrl: 'footer.component.html',
    styleUrls: ['footer.component.css'],
})
export class FooterComponent implements OnInit {
    buildInfo: any;

    location: Location;

    didScroll: any;
    lastScrollTop = 0;
    delta = 5;

    constructor(location: Location,
        private auth: Auth,
        private configApi: ConfigApiService,
        @Inject(DOCUMENT) private document: Document) {
        this.location = location;
    }

    ngOnInit() {
        this.getData();
    }

    getData() {
        this.configApi.getBuildInfo()
            .subscribe(info => {
                this.buildInfo = info;
            });
    }

}
