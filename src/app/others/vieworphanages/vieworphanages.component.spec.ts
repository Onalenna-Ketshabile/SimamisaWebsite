import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VieworphanagesComponent } from './vieworphanages.component';

describe('VieworphanagesComponent', () => {
  let component: VieworphanagesComponent;
  let fixture: ComponentFixture<VieworphanagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VieworphanagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VieworphanagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
