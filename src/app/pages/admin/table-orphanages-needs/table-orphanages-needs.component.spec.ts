import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableOrphanagesNeedsComponent } from './table-orphanages-needs.component';

describe('TableOrphanagesNeedsComponent', () => {
  let component: TableOrphanagesNeedsComponent;
  let fixture: ComponentFixture<TableOrphanagesNeedsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableOrphanagesNeedsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableOrphanagesNeedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
