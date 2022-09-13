import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineChartNeedsComponent } from './line-chart-needs.component';

describe('LineChartNeedsComponent', () => {
  let component: LineChartNeedsComponent;
  let fixture: ComponentFixture<LineChartNeedsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineChartNeedsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LineChartNeedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
