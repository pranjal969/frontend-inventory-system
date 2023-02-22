import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStockinComponent } from './add-stockin.component';

describe('AddStockinComponent', () => {
  let component: AddStockinComponent;
  let fixture: ComponentFixture<AddStockinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddStockinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddStockinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
