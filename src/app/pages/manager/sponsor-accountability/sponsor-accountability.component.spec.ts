import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsorAccountabilityComponent } from './sponsor-accountability.component';

describe('SponsorAccountabilityComponent', () => {
  let component: SponsorAccountabilityComponent;
  let fixture: ComponentFixture<SponsorAccountabilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SponsorAccountabilityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SponsorAccountabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
