import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCalcgasComponent } from './modal-calcgas.component';

describe('ModalCalcgasComponent', () => {
  let component: ModalCalcgasComponent;
  let fixture: ComponentFixture<ModalCalcgasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCalcgasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalCalcgasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
