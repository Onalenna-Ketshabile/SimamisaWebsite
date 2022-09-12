import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsorRequestItemComponent } from './sponsor-request-item.component';

describe('SponsorRequestItemComponent', () => {
  let component: SponsorRequestItemComponent;
  let fixture: ComponentFixture<SponsorRequestItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SponsorRequestItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SponsorRequestItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
