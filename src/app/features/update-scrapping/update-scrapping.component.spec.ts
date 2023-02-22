import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateScrappingComponent } from './update-scrapping.component';

describe('UpdateScrappingComponent', () => {
  let component: UpdateScrappingComponent;
  let fixture: ComponentFixture<UpdateScrappingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateScrappingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateScrappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
