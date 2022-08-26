import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildProfileQueriersComponent } from './child-profile-queriers.component';

describe('ChildProfileQueriersComponent', () => {
  let component: ChildProfileQueriersComponent;
  let fixture: ComponentFixture<ChildProfileQueriersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildProfileQueriersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildProfileQueriersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
