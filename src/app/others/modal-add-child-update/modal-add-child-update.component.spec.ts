import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddChildUpdateComponent } from './modal-add-child-update.component';

describe('ModalAddChildUpdateComponent', () => {
  let component: ModalAddChildUpdateComponent;
  let fixture: ComponentFixture<ModalAddChildUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAddChildUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalAddChildUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
