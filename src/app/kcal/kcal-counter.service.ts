import { Injectable } from '@angular/core';
import { DayRecord } from './day-record';
import { FoodItem } from './food-item';

@Injectable({
  providedIn: 'root'
})
export class KcalCounterService {
  private defaultKcalLimit: number = 2000;
  private firstRun: boolean;
  private firstRunDate: string;

  public currentDayRecord: DayRecord;
  public shownDayRecord: DayRecord;

  getFirstRunDate() {
    return this.firstRunDate;
  }

  isItFirstRun() {
    return this.firstRun;
  }

  firstRunDone() {
    localStorage.setItem('firstRun','false');
    this.firstRun = false;
  }

  // $currentDayRecord(record?: DayRecord) {
  //   if ( record ) {
  //     this.currentDayRecord = record;
  //   }
  //   return this.currentDayRecord;
  // }

  // $shownDayRecord(record?: DayRecord) {
  //   if ( record ) {
  //     this.shownDayRecord = record;
  //   }
  //   return this.shownDayRecord;
  // }
  

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
    localStorage.setItem('activeKcalLimit',newLimit.toString());
    this.currentDayRecord.$kcalLimit = newLimit;
    this.saveDayRecord();
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

  saveDayRecord(record?:DayRecord, date?: Date): DayRecord {
    let currentDate: Date,
        currentRecord: DayRecord;

    if ( date ) {
      currentDate = date;
    } else {
      currentDate = new Date();
    }

    if ( record ) {
      currentRecord = record;
    } else {
      currentRecord = this.currentDayRecord;
    }

    localStorage.setItem(this.dateToString(currentDate),JSON.stringify(currentRecord));
    return currentRecord;
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

  constructor() {
    if ( localStorage.getItem('firstRun') === null || localStorage.getItem('firstRun') === 'true' ) {
      this.firstRunDate = this.dateToString();
      localStorage.setItem('firstRunDate',this.firstRunDate);
      this.firstRun = true;
      localStorage.setItem('firstRun','true');
    } else {
      this.firstRunDate = localStorage.getItem('firstRunDate');
      this.firstRun = false;
    }

    this.currentDayRecord = this.getDayRecord();
    this.shownDayRecord = this.currentDayRecord;

    console.log(this.firstRun);
    console.log(this.firstRunDate);
  }
}
