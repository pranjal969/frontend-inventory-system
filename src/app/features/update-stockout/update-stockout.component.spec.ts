import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateStockoutComponent } from './update-stockout.component';

describe('UpdateStockoutComponent', () => {
  let component: UpdateStockoutComponent;
  let fixture: ComponentFixture<UpdateStockoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateStockoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateStockoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
