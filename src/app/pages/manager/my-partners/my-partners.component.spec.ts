import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPartnersComponent } from './my-partners.component';

describe('MyPartnersComponent', () => {
  let component: MyPartnersComponent;
  let fixture: ComponentFixture<MyPartnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyPartnersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyPartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
