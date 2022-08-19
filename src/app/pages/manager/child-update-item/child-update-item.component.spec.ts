import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildUpdateItemComponent } from './child-update-item.component';

describe('ChildUpdateItemComponent', () => {
  let component: ChildUpdateItemComponent;
  let fixture: ComponentFixture<ChildUpdateItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildUpdateItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildUpdateItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
