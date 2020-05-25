import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAdminsComponent } from './update-admins.component';

describe('UpdateAdminsComponent', () => {
  let component: UpdateAdminsComponent;
  let fixture: ComponentFixture<UpdateAdminsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateAdminsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAdminsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
