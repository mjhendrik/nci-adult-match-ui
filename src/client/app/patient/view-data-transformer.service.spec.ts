import { inject, async, TestBed } from '@angular/core/testing';

import { ViewDataTransformer } from './view-data-transformer.service';

export function main() {
  describe('ViewDataTransformer', () => {
    let service: ViewDataTransformer;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        providers: [ ViewDataTransformer ]
      });
    }));

    it('should be created', () => {
      expect(service instanceof ViewDataTransformer).toBe(false, 'should not be a static instance');
    });

    it('can instantiate service with "new"', inject([], () => {
      let service = new ViewDataTransformer();
      expect(service instanceof ViewDataTransformer).toBe(true, 'new service should be ok');
    }));

    it('can instantiate service when inject service', inject([ViewDataTransformer], (service: ViewDataTransformer) => {
      expect(service instanceof ViewDataTransformer).toBe(true, 'new service should be ok');
    }));

  });
}
