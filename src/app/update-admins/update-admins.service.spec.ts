import { TestBed } from '@angular/core/testing';

import { UpdateAdminsService } from './update-admins.service';

describe('UpdateAdminsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UpdateAdminsService = TestBed.get(UpdateAdminsService);
    expect(service).toBeTruthy();
  });
});
