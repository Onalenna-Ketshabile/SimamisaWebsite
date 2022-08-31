import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuerierItemComponent } from './querier-item.component';

describe('QuerierItemComponent', () => {
  let component: QuerierItemComponent;
  let fixture: ComponentFixture<QuerierItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuerierItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuerierItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
