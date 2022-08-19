import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemProposalsComponent } from './item-proposals.component';

describe('ItemProposalsComponent', () => {
  let component: ItemProposalsComponent;
  let fixture: ComponentFixture<ItemProposalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemProposalsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemProposalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
