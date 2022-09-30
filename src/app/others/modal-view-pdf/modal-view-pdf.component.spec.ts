import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalViewPdfComponent } from './modal-view-pdf.component';

describe('ModalViewPdfComponent', () => {
  let component: ModalViewPdfComponent;
  let fixture: ComponentFixture<ModalViewPdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalViewPdfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalViewPdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
