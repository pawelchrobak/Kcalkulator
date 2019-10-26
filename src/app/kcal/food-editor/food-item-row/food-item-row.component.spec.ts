import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodItemRowComponent } from './food-item-row.component';

describe('FoodItemRowComponent', () => {
  let component: FoodItemRowComponent;
  let fixture: ComponentFixture<FoodItemRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodItemRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodItemRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
