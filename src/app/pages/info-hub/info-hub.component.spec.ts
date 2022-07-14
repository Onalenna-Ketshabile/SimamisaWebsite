import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoHubComponent } from './info-hub.component';

describe('InfoHubComponent', () => {
  let component: InfoHubComponent;
  let fixture: ComponentFixture<InfoHubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoHubComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoHubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
