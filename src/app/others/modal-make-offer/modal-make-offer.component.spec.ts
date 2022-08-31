import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalMakeOfferComponent } from './modal-make-offer.component';

describe('ModalMakeOfferComponent', () => {
  let component: ModalMakeOfferComponent;
  let fixture: ComponentFixture<ModalMakeOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalMakeOfferComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalMakeOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
