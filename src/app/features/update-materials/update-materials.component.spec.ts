import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMaterialsComponent } from './update-materials.component';

describe('UpdateMaterialsComponent', () => {
  let component: UpdateMaterialsComponent;
  let fixture: ComponentFixture<UpdateMaterialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateMaterialsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateMaterialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
