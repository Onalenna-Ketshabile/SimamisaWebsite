import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableUnreliableUsersComponent } from './table-unreliable-users.component';

describe('TableUnreliableUsersComponent', () => {
  let component: TableUnreliableUsersComponent;
  let fixture: ComponentFixture<TableUnreliableUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableUnreliableUsersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableUnreliableUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
