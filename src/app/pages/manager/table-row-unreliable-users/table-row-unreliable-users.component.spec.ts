import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableRowUnreliableUsersComponent } from './table-row-unreliable-users.component';

describe('TableRowUnreliableUsersComponent', () => {
  let component: TableRowUnreliableUsersComponent;
  let fixture: ComponentFixture<TableRowUnreliableUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableRowUnreliableUsersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableRowUnreliableUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
