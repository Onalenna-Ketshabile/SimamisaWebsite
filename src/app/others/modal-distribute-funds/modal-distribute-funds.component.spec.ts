import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDistributeFundsComponent } from './modal-distribute-funds.component';

describe('ModalDistributeFundsComponent', () => {
  let component: ModalDistributeFundsComponent;
  let fixture: ComponentFixture<ModalDistributeFundsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalDistributeFundsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalDistributeFundsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
