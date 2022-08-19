import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditChildneedComponent } from './edit-childneed.component';

describe('EditChildneedComponent', () => {
  let component: EditChildneedComponent;
  let fixture: ComponentFixture<EditChildneedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditChildneedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditChildneedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
