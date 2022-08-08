import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPaypalNeedComponent } from './modal-paypal-need.component';

describe('ModalPaypalNeedComponent', () => {
  let component: ModalPaypalNeedComponent;
  let fixture: ComponentFixture<ModalPaypalNeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalPaypalNeedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalPaypalNeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
