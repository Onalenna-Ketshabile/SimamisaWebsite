import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableRowInventoryComponent } from './table-row-inventory.component';

describe('TableRowInventoryComponent', () => {
  let component: TableRowInventoryComponent;
  let fixture: ComponentFixture<TableRowInventoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableRowInventoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableRowInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
