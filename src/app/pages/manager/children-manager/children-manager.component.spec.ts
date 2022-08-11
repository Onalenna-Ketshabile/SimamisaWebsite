import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildrenManagerComponent } from './children-manager.component';

describe('ChildrenManagerComponent', () => {
  let component: ChildrenManagerComponent;
  let fixture: ComponentFixture<ChildrenManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildrenManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildrenManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
