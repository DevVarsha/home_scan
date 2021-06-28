import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProfilrComponent } from './my-profilr.component';

describe('MyProfilrComponent', () => {
  let component: MyProfilrComponent;
  let fixture: ComponentFixture<MyProfilrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyProfilrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyProfilrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
