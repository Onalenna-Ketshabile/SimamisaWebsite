import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildNeedItemComponent } from './child-need-item.component';

describe('ChildNeedItemComponent', () => {
  let component: ChildNeedItemComponent;
  let fixture: ComponentFixture<ChildNeedItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildNeedItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildNeedItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
