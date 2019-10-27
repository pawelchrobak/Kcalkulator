import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodItemAdderComponent } from './food-item-adder.component';

describe('FoodItemAdderComponent', () => {
  let component: FoodItemAdderComponent;
  let fixture: ComponentFixture<FoodItemAdderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodItemAdderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodItemAdderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
