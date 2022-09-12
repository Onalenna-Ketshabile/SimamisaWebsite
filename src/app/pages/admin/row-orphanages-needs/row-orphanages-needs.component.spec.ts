import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RowOrphanagesNeedsComponent } from './row-orphanages-needs.component';

describe('RowOrphanagesNeedsComponent', () => {
  let component: RowOrphanagesNeedsComponent;
  let fixture: ComponentFixture<RowOrphanagesNeedsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RowOrphanagesNeedsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RowOrphanagesNeedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
