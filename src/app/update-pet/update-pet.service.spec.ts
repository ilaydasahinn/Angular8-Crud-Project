import { TestBed } from '@angular/core/testing';

import { UpdatePetService } from './update-pet.service';

describe('UpdatePetService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UpdatePetService = TestBed.get(UpdatePetService);
    expect(service).toBeTruthy();
  });
});
