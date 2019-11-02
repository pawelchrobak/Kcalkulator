import { Injectable } from '@angular/core';
import { DayRecord } from './day-record';
import { FoodItem } from './food-item';

@Injectable({
  providedIn: 'root'
})
export class KcalCounterService {
  private defaultKcalLimit: number = 2000;

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

  dateToString(date?: Date): string {
    let currentDate: Date,
        yyyy: string,
        MM: any,
        dd: any;
        
    if ( date ) {
      currentDate = date;
    } else {
      currentDate = new Date();
    }

    yyyy = currentDate.getFullYear().toString();
    MM = currentDate.getMonth()+1;
    if ( MM < 10 ) { MM = '0' + MM.toString(); } else { MM = MM.toString(); }
    dd = currentDate.getDate();
    if ( dd < 10 ) { dd = '0' + dd.toString(); } else { dd = dd.toString(); }
    return `${yyyy}-${MM}-${dd}`;
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

  saveDayRecord(record:DayRecord, date?: Date): DayRecord {
    let currentDate: Date;

    if ( date ) {
      currentDate = date;
    } else {
      currentDate = new Date();
    }

    localStorage.setItem(this.dateToString(currentDate),JSON.stringify(record));
    return record;
  }

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
