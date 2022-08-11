import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildNeedsComponent } from './child-needs.component';

describe('ChildNeedsComponent', () => {
  let component: ChildNeedsComponent;
  let fixture: ComponentFixture<ChildNeedsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildNeedsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildNeedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
