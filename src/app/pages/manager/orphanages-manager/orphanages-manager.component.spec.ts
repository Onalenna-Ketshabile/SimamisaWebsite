import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrphanagesManagerComponent } from './orphanages-manager.component';

describe('OrphanagesManagerComponent', () => {
  let component: OrphanagesManagerComponent;
  let fixture: ComponentFixture<OrphanagesManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrphanagesManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrphanagesManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
