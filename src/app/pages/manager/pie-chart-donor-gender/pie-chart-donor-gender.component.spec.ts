import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieChartDonorGenderComponent } from './pie-chart-donor-gender.component';

describe('PieChartDonorGenderComponent', () => {
  let component: PieChartDonorGenderComponent;
  let fixture: ComponentFixture<PieChartDonorGenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PieChartDonorGenderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PieChartDonorGenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
