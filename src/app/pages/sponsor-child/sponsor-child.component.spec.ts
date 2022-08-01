import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsorChildComponent } from './sponsor-child.component';

describe('SponsorChildComponent', () => {
  let component: SponsorChildComponent;
  let fixture: ComponentFixture<SponsorChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SponsorChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SponsorChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
