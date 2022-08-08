import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalMakeItemproposalComponent } from './modal-make-itemproposal.component';

describe('ModalMakeItemproposalComponent', () => {
  let component: ModalMakeItemproposalComponent;
  let fixture: ComponentFixture<ModalMakeItemproposalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalMakeItemproposalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalMakeItemproposalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
