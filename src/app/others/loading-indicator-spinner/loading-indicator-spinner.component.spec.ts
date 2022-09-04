import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingIndicatorSpinnerComponent } from './loading-indicator-spinner.component';

describe('LoadingIndicatorSpinnerComponent', () => {
  let component: LoadingIndicatorSpinnerComponent;
  let fixture: ComponentFixture<LoadingIndicatorSpinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadingIndicatorSpinnerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadingIndicatorSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
