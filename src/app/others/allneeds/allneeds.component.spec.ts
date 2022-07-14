import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllneedsComponent } from './allneeds.component';

describe('AllneedsComponent', () => {
  let component: AllneedsComponent;
  let fixture: ComponentFixture<AllneedsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllneedsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllneedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
