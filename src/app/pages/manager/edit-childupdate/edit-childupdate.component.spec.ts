import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditChildupdateComponent } from './edit-childupdate.component';

describe('EditChildupdateComponent', () => {
  let component: EditChildupdateComponent;
  let fixture: ComponentFixture<EditChildupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditChildupdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditChildupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
