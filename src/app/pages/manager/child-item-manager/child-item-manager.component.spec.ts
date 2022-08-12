import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildItemManagerComponent } from './child-item-manager.component';

describe('ChildItemManagerComponent', () => {
  let component: ChildItemManagerComponent;
  let fixture: ComponentFixture<ChildItemManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildItemManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildItemManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
