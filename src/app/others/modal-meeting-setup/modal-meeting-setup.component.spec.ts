import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalMeetingSetupComponent } from './modal-meeting-setup.component';

describe('ModalMeetingSetupComponent', () => {
  let component: ModalMeetingSetupComponent;
  let fixture: ComponentFixture<ModalMeetingSetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalMeetingSetupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalMeetingSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
