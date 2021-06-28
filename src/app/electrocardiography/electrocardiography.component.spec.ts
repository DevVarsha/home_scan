import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectrocardiographyComponent } from './electrocardiography.component';

describe('ElectrocardiographyComponent', () => {
  let component: ElectrocardiographyComponent;
  let fixture: ComponentFixture<ElectrocardiographyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectrocardiographyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectrocardiographyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
