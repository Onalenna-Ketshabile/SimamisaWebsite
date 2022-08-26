import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPartneringrequestsComponent } from './view-partneringrequests.component';

describe('ViewPartneringrequestsComponent', () => {
  let component: ViewPartneringrequestsComponent;
  let fixture: ComponentFixture<ViewPartneringrequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPartneringrequestsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewPartneringrequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
