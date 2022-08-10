import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrphanageItemComponent } from './orphanage-item.component';

describe('OrphanageItemComponent', () => {
  let component: OrphanageItemComponent;
  let fixture: ComponentFixture<OrphanageItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrphanageItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrphanageItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
