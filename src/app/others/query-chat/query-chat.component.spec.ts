import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryChatComponent } from './query-chat.component';

describe('QueryChatComponent', () => {
  let component: QueryChatComponent;
  let fixture: ComponentFixture<QueryChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QueryChatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QueryChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
