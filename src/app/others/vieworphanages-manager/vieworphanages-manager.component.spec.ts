import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VieworphanagesManagerComponent } from './vieworphanages-manager.component';

describe('VieworphanagesManagerComponent', () => {
  let component: VieworphanagesManagerComponent;
  let fixture: ComponentFixture<VieworphanagesManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VieworphanagesManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VieworphanagesManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
