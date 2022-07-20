import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeeditemComponent } from './needitem.component';

describe('NeeditemComponent', () => {
  let component: NeeditemComponent;
  let fixture: ComponentFixture<NeeditemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NeeditemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NeeditemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
