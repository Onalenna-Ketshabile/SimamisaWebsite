import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartneringRequestsComponent } from './partnering-requests.component';

describe('PartneringRequestsComponent', () => {
  let component: PartneringRequestsComponent;
  let fixture: ComponentFixture<PartneringRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartneringRequestsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartneringRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
