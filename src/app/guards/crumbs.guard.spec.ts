import { TestBed, async, inject } from '@angular/core/testing';

import { CrumbsGuard } from './crumbs.guard';

describe('CrumbsGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CrumbsGuard]
    });
  });

  it('should ...', inject([CrumbsGuard], (guard: CrumbsGuard) => {
    expect(guard).toBeTruthy();
  }));
});
