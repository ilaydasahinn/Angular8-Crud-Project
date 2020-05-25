import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilOwnerComponent } from './profil-owner.component';

describe('ProfilOwnerComponent', () => {
  let component: ProfilOwnerComponent;
  let fixture: ComponentFixture<ProfilOwnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilOwnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
