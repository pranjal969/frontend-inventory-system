import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddScrappingComponent } from './add-scrapping.component';

describe('AddScrappingComponent', () => {
  let component: AddScrappingComponent;
  let fixture: ComponentFixture<AddScrappingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddScrappingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddScrappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
