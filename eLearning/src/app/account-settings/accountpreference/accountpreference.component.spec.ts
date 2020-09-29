import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountpreferenceComponent } from './accountpreference.component';

describe('AccountpreferenceComponent', () => {
  let component: AccountpreferenceComponent;
  let fixture: ComponentFixture<AccountpreferenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountpreferenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountpreferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
