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

  foodItemChangeHandler($event) {
    switch ($event.action) {
      case 'edit':
        this.service.updateFoodItem($event.foodItem, $event.formValues.name, $event.formValues.kcal);
        // this.foodItemsList = this.service.getAllFoodItems();
        break;
      case 'delete':
        this.service.deleteFoodItem($event.foodItem);
        break;
    }
  }


  constructor(private service:FoodServiceService) { }

  ngOnInit() {
    this.foodItemsList = this.service.getAllFoodItems();
  }

}
