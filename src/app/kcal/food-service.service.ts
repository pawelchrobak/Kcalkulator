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

  updateFoodItem(foodItemToUpdate: FoodItem, newName:string, newKcal:number) {
    for ( let item of foodDB ) {
      if ( item.$id == foodItemToUpdate.$id ) {
        item.$name = newName;
        item.$kcal = newKcal;
        break;
      }
    }
  }

  deleteFoodItem(foodItemToDelete: FoodItem) {
    let foodItemAmount = foodDB.length;

    for ( let i = 0; i<foodItemAmount ; i++) {
      if ( foodDB[i].$id == foodItemToDelete.$id ) {
        foodDB.splice(i,1);
        break;
      }
    }
  }

  constructor() { }
}
