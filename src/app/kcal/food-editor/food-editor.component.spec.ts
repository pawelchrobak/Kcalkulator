import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodEditorComponent } from './food-editor.component';

describe('FoodEditorComponent', () => {
  let component: FoodEditorComponent;
  let fixture: ComponentFixture<FoodEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
