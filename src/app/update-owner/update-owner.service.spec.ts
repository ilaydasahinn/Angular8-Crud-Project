import { TestBed } from '@angular/core/testing';

import { UpdateOwnerService } from './update-owner.service';

describe('UpdateOwnerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UpdateOwnerService = TestBed.get(UpdateOwnerService);
    expect(service).toBeTruthy();
  });
});
