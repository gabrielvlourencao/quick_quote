import { TestBed } from '@angular/core/testing';

import { SaasUtilsService } from './saas-utils.service';

describe('SaasUtilsService', () => {
  let service: SaasUtilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaasUtilsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
