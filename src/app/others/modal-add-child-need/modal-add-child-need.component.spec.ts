import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddChildNeedComponent } from './modal-add-child-need.component';

describe('ModalAddChildNeedComponent', () => {
  let component: ModalAddChildNeedComponent;
  let fixture: ComponentFixture<ModalAddChildNeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAddChildNeedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalAddChildNeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
