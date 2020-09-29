import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConceptappComponent } from './conceptapp.component';

describe('ConceptappComponent', () => {
  let component: ConceptappComponent;
  let fixture: ComponentFixture<ConceptappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConceptappComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConceptappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
