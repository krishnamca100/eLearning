import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileandvisibilityComponent } from './profileandvisibility.component';

describe('ProfileandvisibilityComponent', () => {
  let component: ProfileandvisibilityComponent;
  let fixture: ComponentFixture<ProfileandvisibilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileandvisibilityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileandvisibilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
