import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsfeedPostComponent } from './newsfeed-post.component';

describe('NewsfeedPostComponent', () => {
  let component: NewsfeedPostComponent;
  let fixture: ComponentFixture<NewsfeedPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsfeedPostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsfeedPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
