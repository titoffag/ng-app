import { TestBed } from '@angular/core/testing';

import { CrumbsService } from './crumbs.service';

describe('CrumbsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CrumbsService = TestBed.get(CrumbsService);
    expect(service).toBeTruthy();
  });
});
