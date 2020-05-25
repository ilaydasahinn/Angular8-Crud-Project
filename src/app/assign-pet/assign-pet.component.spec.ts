import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignPetComponent } from './assign-pet.component';

describe('AssignPetComponent', () => {
  let component: AssignPetComponent;
  let fixture: ComponentFixture<AssignPetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignPetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignPetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
