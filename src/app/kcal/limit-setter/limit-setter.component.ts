import { Component, OnInit } from '@angular/core';
import { KcalCounterService } from '../kcal-counter.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-limit-setter',
  templateUrl: './limit-setter.component.html',
  styleUrls: ['./limit-setter.component.scss']
})
export class LimitSetterComponent implements OnInit {
  private limitForm: FormGroup;
  private buttonLimit: string = "Ustaw";

  setLimit() {
    let kcalLimit = this.limitForm.value.kcalLimit;
    this.kcalService.setActiveKcalLimit(kcalLimit);
    this.buttonLimit = "Zapisano";
    this.limitForm.reset({kcalLimit: this.kcalService.getActiveKcalLimit()});
  }

  constructor(private kcalService:KcalCounterService) { }

  ngOnInit() {
    this.limitForm = new FormGroup({
      kcalLimit: new FormControl(this.kcalService.getActiveKcalLimit(), [Validators.required,Validators.min(0)])
    });

    if ( this.kcalService.isActiveKcalLimitSet() ) {
      this.buttonLimit = "Zmień";
    }

  }

}
