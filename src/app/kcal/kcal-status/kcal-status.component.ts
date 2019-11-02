import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-kcal-status',
  templateUrl: './kcal-status.component.html',
  styleUrls: ['./kcal-status.component.scss']
})
export class KcalStatusComponent implements OnInit {

  @Input() private kcalConsumed: number;
  @Input() private kcalLimit: number;

  constructor() { }

  ngOnInit() {
  }

}
