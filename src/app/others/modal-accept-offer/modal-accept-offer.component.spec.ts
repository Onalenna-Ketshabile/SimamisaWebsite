import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAcceptOfferComponent } from './modal-accept-offer.component';

describe('ModalAcceptOfferComponent', () => {
  let component: ModalAcceptOfferComponent;
  let fixture: ComponentFixture<ModalAcceptOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAcceptOfferComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalAcceptOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
