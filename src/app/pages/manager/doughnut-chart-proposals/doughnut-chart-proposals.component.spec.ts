import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoughnutChartProposalsComponent } from './doughnut-chart-proposals.component';

describe('DoughnutChartProposalsComponent', () => {
  let component: DoughnutChartProposalsComponent;
  let fixture: ComponentFixture<DoughnutChartProposalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoughnutChartProposalsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoughnutChartProposalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
