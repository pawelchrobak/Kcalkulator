import { Component, OnInit } from '@angular/core';
import { KcalCounterService } from 'src/app/kcal/kcal-counter.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  private firstRun = true;

  constructor(private kcalService:KcalCounterService) { }

  ngOnInit() {
    this.firstRun = this.kcalService.isItFirstRun();
    this.kcalService.firstRunDone();
  }

}
