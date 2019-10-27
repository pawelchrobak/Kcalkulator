import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FoodServiceService } from '../../food-service.service';
import { FoodItem } from '../../food-item';

@Component({
  selector: 'app-food-item-adder',
  templateUrl: './food-item-adder.component.html',
  styleUrls: ['./food-item-adder.component.scss']
})
export class FoodItemAdderComponent implements OnInit {

  private foodForm: FormGroup;
  private buttonAdd: string = 'Dodaj';

  addFood(): FoodItem {
    let result = this.service.addFoodItem(new FoodItem(0,this.foodForm.value.name,this.foodForm.value.kcal));
    this.foodForm.reset();
    return result;
  }

  constructor(private service:FoodServiceService) { }

  ngOnInit() {
    this.foodForm = new FormGroup({
      name: new FormControl('', Validators.required),
      kcal: new FormControl('', [Validators.required,Validators.min(0)])
    });
  }

}