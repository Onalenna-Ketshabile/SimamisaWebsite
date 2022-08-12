import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildUpdatesComponent } from './child-updates.component';

describe('ChildUpdatesComponent', () => {
  let component: ChildUpdatesComponent;
  let fixture: ComponentFixture<ChildUpdatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildUpdatesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildUpdatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
