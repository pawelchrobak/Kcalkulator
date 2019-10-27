import { Injectable } from '@angular/core';
import { defaultFoodDB } from './food-db';
import { FoodItem } from './food-item';

@Injectable({
  providedIn: 'root'
})
export class FoodServiceService {
  private DBname: string = 'foodDB';
  private foodDB: Array<FoodItem>;

  getAllFoodItems(): Array<FoodItem> {
    return this.foodDB;
  }

  saveFoodDB(): Array<FoodItem> {
    localStorage.setItem(this.DBname,JSON.stringify(this.foodDB));
    return this.foodDB;
  }

  updateFoodItem(foodItemToUpdate: FoodItem, newName:string, newKcal:number) {
    for ( let item of this.foodDB ) {
      if ( item.$id == foodItemToUpdate.$id ) {
        item.$name = newName;
        item.$kcal = newKcal;
        this.saveFoodDB();
        return item;
      }
    }
  }

  deleteFoodItem(foodItemToDelete: FoodItem) {
    let foodItemAmount = this.foodDB.length;

    for ( let i = 0; i<foodItemAmount ; i++) {
      if ( this.foodDB[i].$id == foodItemToDelete.$id ) {
        this.foodDB.splice(i,1);
        break;
      }
    }

    this.saveFoodDB();
    return true;
  }

  addFoodItem(foodItemToAdd: FoodItem): FoodItem {
    let allIds: Array<number> = [];

    for ( let item of this.foodDB ) {
      allIds.push(item.$id);
    }

    allIds.sort( (a,b) => {return b-a} );
    foodItemToAdd.$id = allIds[0] + 1;

    this.foodDB.push(foodItemToAdd);
    this.saveFoodDB();
    return foodItemToAdd;
  }

  constructor() {
    let resultDB = defaultFoodDB;

    if ( localStorage.getItem(this.DBname) != null ) {
      resultDB = [];
      let localDB = JSON.parse(localStorage.getItem(this.DBname));

      for (let item of localDB) {
        resultDB.push(new FoodItem(item.id, item.name, item.kcal));
      }
    }
    this.foodDB = resultDB;
  }
}
