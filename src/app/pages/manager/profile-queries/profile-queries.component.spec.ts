import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileQueriesComponent } from './profile-queries.component';

describe('ProfileQueriesComponent', () => {
  let component: ProfileQueriesComponent;
  let fixture: ComponentFixture<ProfileQueriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileQueriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileQueriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
