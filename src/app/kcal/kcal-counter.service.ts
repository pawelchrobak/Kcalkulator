import { Injectable } from '@angular/core';
import { DayRecord } from './day-record';
import { FoodItem } from './food-item';

@Injectable({
  providedIn: 'root'
})
export class KcalCounterService {
  private defaultKcalLimit: number = 2000;

  addEatenMeal($food: FoodItem): DayRecord {
    let record = this.getDayRecord();
    record.$foodItemsEaten.push($food);
    console.log($food.$kcal);
    console.log(record.$kcalConsumed);
    record.$kcalConsumed = record.$kcalConsumed + $food.$kcal;
    return record;
  }

  getActiveKcalLimit(): number {
    let limit = this.defaultKcalLimit;
    if ( this.isActiveKcalLimitSet() ) {
      limit = parseInt(localStorage.getItem('activeKcalLimit'));
    }
    return limit;
  }

  isActiveKcalLimitSet(): boolean {
    let isSet = false;
    if ( localStorage.getItem('activeKcalLimit') ) {
      isSet = true;
    }
    return isSet;
  }

  setActiveKcalLimit(newLimit: number): number {
    localStorage.setItem('activeKcalLimit',newLimit.toString())
    return newLimit;
  }

  private dateToString(date?: Date): string {
    let currentDate: Date;
        
    if ( date ) {
      currentDate = date;
    } else {
      currentDate = new Date();
    }
    return `${currentDate.getFullYear()}-${currentDate.getMonth()}-${currentDate.getDate()}`;
  }
  
  // getKcalLimit(date?: Date): number {
  //   let currentDate: Date,
  //       kcalLimit: number = this.defaultKcalLimit;
        
  //   if ( date ) {
  //     currentDate = date;
  //   } else {
  //     currentDate = new Date();
  //   }

  //   if ( localStorage.getItem(this.dateToString(currentDate)) != null ) {
  //     let localRecord = JSON.parse(localStorage.getItem(this.dateToString(currentDate)));
  //     kcalLimit = localRecord.kcalLimit;
  //   }
  //   return kcalLimit;
  // }

  getDayRecord(date?: Date): DayRecord {
    let currentDate: Date,
        record: DayRecord;

    if ( date ) {
      currentDate = date;
    } else {
      currentDate = new Date();
    }

    if ( localStorage.getItem(this.dateToString(currentDate)) != null ) {
      let localRecord = JSON.parse(localStorage.getItem(this.dateToString(currentDate)));
      record = new DayRecord(localRecord.kcalLimit,localRecord.kcalConsumed,localRecord.foodItemsEaten);
    } else {
      record = new DayRecord(this.getActiveKcalLimit(),0,[]);
    }
    return record;
  }

  constructor() { }
}
