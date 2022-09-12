import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickupItemComponent } from './pickup-item.component';

describe('PickupItemComponent', () => {
  let component: PickupItemComponent;
  let fixture: ComponentFixture<PickupItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PickupItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PickupItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
