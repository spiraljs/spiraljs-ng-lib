import { TestBed } from '@angular/core/testing';

import { SpiraljsNgLibService } from './spiraljs-ng-lib.service';

describe('SpiraljsNgLibService', () => {
  let service: SpiraljsNgLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpiraljsNgLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
