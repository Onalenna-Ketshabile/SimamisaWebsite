import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddNeedComponent } from './modal-add-need.component';

describe('ModalAddNeedComponent', () => {
  let component: ModalAddNeedComponent;
  let fixture: ComponentFixture<ModalAddNeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAddNeedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalAddNeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
