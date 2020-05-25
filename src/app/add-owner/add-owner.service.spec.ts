import { TestBed } from '@angular/core/testing';

import { AddOwnerService } from './add-owner.service';

describe('AddOwnerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddOwnerService = TestBed.get(AddOwnerService);
    expect(service).toBeTruthy();
  });
});
