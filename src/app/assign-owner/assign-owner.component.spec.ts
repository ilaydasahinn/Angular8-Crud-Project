import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignOwnerComponent } from './assign-owner.component';

describe('AssignOwnerComponent', () => {
  let component: AssignOwnerComponent;
  let fixture: ComponentFixture<AssignOwnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignOwnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
