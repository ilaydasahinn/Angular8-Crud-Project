import { TestBed } from '@angular/core/testing';

import { AssignOwnerService } from './assign-owner.service';

describe('AssignOwnerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AssignOwnerService = TestBed.get(AssignOwnerService);
    expect(service).toBeTruthy();
  });
});
