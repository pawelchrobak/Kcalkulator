import { Component, OnInit, Input } from '@angular/core';
import { DayRecord } from '../day-record';
import { KcalCounterService } from '../kcal-counter.service';

@Component({
  selector: 'app-meal-history',
  templateUrl: './meal-history.component.html',
  styleUrls: ['./meal-history.component.scss']
})
export class MealHistoryComponent implements OnInit {

  private currentDate: Date= new Date();
  private currentDateString: string = this.kcalService.dateToString(this.currentDate);
  private shownDate: Date;
  private shownDateString: string;

  showDate(input) {
    this.shownDate.setTime(Date.parse(input.value));
    this.shownDateString = input.value;

    if ( this.shownDateString === this.currentDateString ) {
      this.kcalService.shownDayRecord = this.kcalService.currentDayRecord;
    } else {
      this.kcalService.shownDayRecord = this.kcalService.getDayRecord(this.shownDate);
    }

    return this.shownDateString;
  }

  changeDay(x: number): string {
    let nextDay = this.shownDate.getTime() + x * ( 24 * 60 * 60 * 1000);
    this.shownDate.setTime(nextDay);
    this.shownDateString = this.kcalService.dateToString(this.shownDate);

    if ( this.shownDateString === this.currentDateString ) {
      this.kcalService.shownDayRecord = this.kcalService.currentDayRecord;
    } else {
      this.kcalService.shownDayRecord = this.kcalService.getDayRecord(this.shownDate);
    }

    return this.shownDateString;
  }


  constructor(private kcalService: KcalCounterService) { }

  ngOnInit() {
    this.shownDate = this.currentDate;
    this.shownDateString = this.kcalService.dateToString(this.shownDate);
    this.kcalService.shownDayRecord = this.kcalService.currentDayRecord;
  }

}
