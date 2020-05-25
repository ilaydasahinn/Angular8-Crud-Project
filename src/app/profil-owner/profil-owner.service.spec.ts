import { TestBed } from '@angular/core/testing';

import { ProfilOwnerService } from './profil-owner.service';

describe('ProfilOwnerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProfilOwnerService = TestBed.get(ProfilOwnerService);
    expect(service).toBeTruthy();
  });
});
