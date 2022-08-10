import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChilditemComponent } from './childitem.component';

describe('ChilditemComponent', () => {
  let component: ChilditemComponent;
  let fixture: ComponentFixture<ChilditemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChilditemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChilditemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
