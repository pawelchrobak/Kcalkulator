import { Injectable } from '@angular/core';
import { foodDB } from './food-db';
import { FoodItem } from './food-item';

@Injectable({
  providedIn: 'root'
})
export class FoodServiceService {

  getAllFoodItems(): Array<FoodItem> {
    return foodDB;
  }


  constructor() { }
}
