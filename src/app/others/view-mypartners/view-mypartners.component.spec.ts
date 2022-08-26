import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMypartnersComponent } from './view-mypartners.component';

describe('ViewMypartnersComponent', () => {
  let component: ViewMypartnersComponent;
  let fixture: ComponentFixture<ViewMypartnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewMypartnersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewMypartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
