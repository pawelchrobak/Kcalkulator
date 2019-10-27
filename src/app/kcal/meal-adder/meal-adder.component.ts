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
  private currentDayRecord: DayRecord;
  private mealAddForm: FormGroup;
  private buttonAdd: string = 'Chrup!';
  private kcalLimit: number;
  private kcalConsumed: number;

  constructor(private foodService:FoodServiceService, private kcalService:KcalCounterService ) { }

  addMeal() {
    let eatenMeal = this.foodItemsList[this.mealAddForm.get('meal').value];
    console.log(eatenMeal);
    this.currentDayRecord = this.kcalService.addEatenMeal(eatenMeal);
  }

  ngOnInit() {
    this.mealAddForm = new FormGroup({
      meal: new FormControl('', Validators.required)
    });
    this.foodItemsList = this.foodService.getAllFoodItems();
    this.currentDayRecord = this.kcalService.getDayRecord();
  }

}
