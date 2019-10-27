import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MealAdderComponent } from './meal-adder/meal-adder.component';
import { FoodEditorComponent } from './food-editor/food-editor.component';
import { FoodItemRowComponent } from './food-editor/food-item-row/food-item-row.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FoodItemAdderComponent } from './food-editor/food-item-adder/food-item-adder.component';



@NgModule({
  declarations: [
    MealAdderComponent,
    FoodEditorComponent,
    FoodItemRowComponent,
    FoodItemAdderComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    MealAdderComponent,
    FoodEditorComponent,
    FoodItemRowComponent
  ]
})
export class KcalModule { }
