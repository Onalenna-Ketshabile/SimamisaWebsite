import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableInventoryComponent } from './table-inventory.component';

describe('TableInventoryComponent', () => {
  let component: TableInventoryComponent;
  let fixture: ComponentFixture<TableInventoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableInventoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
