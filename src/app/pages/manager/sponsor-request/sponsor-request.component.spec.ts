import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsorRequestComponent } from './sponsor-request.component';

describe('SponsorRequestComponent', () => {
  let component: SponsorRequestComponent;
  let fixture: ComponentFixture<SponsorRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SponsorRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SponsorRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
