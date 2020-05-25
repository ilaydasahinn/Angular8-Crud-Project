import { TestBed } from '@angular/core/testing';

import { AddPetService } from './add-pet.service';

describe('AddPetService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddPetService = TestBed.get(AddPetService);
    expect(service).toBeTruthy();
  });
});
