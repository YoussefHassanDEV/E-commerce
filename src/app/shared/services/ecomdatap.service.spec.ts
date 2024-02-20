import { TestBed } from '@angular/core/testing';

import { EcomdatapService } from './ecomdatap.service';

describe('EcomdatapService', () => {
  let service: EcomdatapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EcomdatapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
