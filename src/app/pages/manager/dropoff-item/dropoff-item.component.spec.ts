import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropoffItemComponent } from './dropoff-item.component';

describe('DropoffItemComponent', () => {
  let component: DropoffItemComponent;
  let fixture: ComponentFixture<DropoffItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropoffItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropoffItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
