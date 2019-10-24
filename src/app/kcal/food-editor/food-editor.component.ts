import { Component, OnInit } from '@angular/core';
import { FoodItem } from '../food-item';
import { FoodServiceService } from '../food-service.service';

@Component({
  selector: 'app-food-editor',
  templateUrl: './food-editor.component.html',
  styleUrls: ['./food-editor.component.scss']
})
export class FoodEditorComponent implements OnInit {

  private foodItemsList: Array<FoodItem>;

  constructor(private service:FoodServiceService) { }

  ngOnInit() {
    this.foodItemsList = this.service.getAllFoodItems();
  }

}
