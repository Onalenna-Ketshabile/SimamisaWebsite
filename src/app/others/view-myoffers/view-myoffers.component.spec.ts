import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMyoffersComponent } from './view-myoffers.component';

describe('ViewMyoffersComponent', () => {
  let component: ViewMyoffersComponent;
  let fixture: ComponentFixture<ViewMyoffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewMyoffersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewMyoffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
