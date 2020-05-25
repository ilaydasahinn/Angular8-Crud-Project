import { TestBed } from '@angular/core/testing';

import { AssignPetService } from './assign-pet.service';

describe('AssignPetService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AssignPetService = TestBed.get(AssignPetService);
    expect(service).toBeTruthy();
  });
});
