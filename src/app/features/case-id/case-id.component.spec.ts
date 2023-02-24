import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseIdComponent } from './case-id.component';

describe('CaseIdComponent', () => {
  let component: CaseIdComponent;
  let fixture: ComponentFixture<CaseIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaseIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaseIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
