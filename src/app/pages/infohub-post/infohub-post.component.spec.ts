import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfohubPostComponent } from './infohub-post.component';

describe('InfohubPostComponent', () => {
  let component: InfohubPostComponent;
  let fixture: ComponentFixture<InfohubPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfohubPostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfohubPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
