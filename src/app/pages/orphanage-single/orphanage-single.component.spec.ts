import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrphanageSingleComponent } from './orphanage-single.component';

describe('OrphanageSingleComponent', () => {
  let component: OrphanageSingleComponent;
  let fixture: ComponentFixture<OrphanageSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrphanageSingleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrphanageSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
