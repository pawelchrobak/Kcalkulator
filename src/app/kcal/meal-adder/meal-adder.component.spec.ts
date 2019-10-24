import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MealAdderComponent } from './meal-adder.component';

describe('MealAdderComponent', () => {
  let component: MealAdderComponent;
  let fixture: ComponentFixture<MealAdderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MealAdderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MealAdderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
