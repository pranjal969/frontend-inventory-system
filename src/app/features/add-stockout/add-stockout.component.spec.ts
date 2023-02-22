import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStockoutComponent } from './add-stockout.component';

describe('AddStockoutComponent', () => {
  let component: AddStockoutComponent;
  let fixture: ComponentFixture<AddStockoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddStockoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddStockoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
