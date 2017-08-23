export function downloadFile(url: string) {
    window.open(url, '_blank', 'rel="noopener noreferrer"');
}

import { Injectable } from '@angular/core';

@Injectable()
export class DownloadService {
    constructor(private window: Window) { }

    downloadFile(url: string) {
        this.window.open(url, '_blank', 'rel="noopener noreferrer"');
    }
}
