import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RowSponsorAccComponent } from './row-sponsor-acc.component';

describe('RowSponsorAccComponent', () => {
  let component: RowSponsorAccComponent;
  let fixture: ComponentFixture<RowSponsorAccComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RowSponsorAccComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RowSponsorAccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
