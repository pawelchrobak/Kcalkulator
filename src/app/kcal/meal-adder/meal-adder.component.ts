import { Component, OnInit } from '@angular/core';
import { FoodItem } from '../food-item';
import { FoodServiceService } from '../food-service.service';
import { KcalCounterService } from '../kcal-counter.service';
import { DayRecord } from '../day-record';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-meal-adder',
  templateUrl: './meal-adder.component.html',
  styleUrls: ['./meal-adder.component.scss']
})
export class MealAdderComponent implements OnInit {
  private foodItemsList: Array<FoodItem>;
  private mealAddForm: FormGroup;
  private buttonAdd: string = 'OK!';
  private kcalLimit: number;
  private kcalConsumed: number;

  constructor(private foodService:FoodServiceService, private kcalService:KcalCounterService ) { }

  resetDay() {
    localStorage.removeItem(this.kcalService.dateToString());
  }
  addMeal() {
    let eatenMeal = this.foodItemsList[this.mealAddForm.get('meal').value];
    this.kcalService.currentDayRecord.addEatenFoodItem(eatenMeal);
    this.kcalService.saveDayRecord(this.kcalService.currentDayRecord);
  }

  ngOnInit() {
    this.mealAddForm = new FormGroup({
      meal: new FormControl('', Validators.required)
    });
    this.foodItemsList = this.foodService.getAllFoodItems();
  }

}
