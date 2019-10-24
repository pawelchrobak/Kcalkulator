import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MealAdderComponent } from './meal-adder/meal-adder.component';
import { FoodEditorComponent } from './food-editor/food-editor.component';



@NgModule({
  declarations: [MealAdderComponent, FoodEditorComponent],
  imports: [
    CommonModule
  ],
  exports: [
    MealAdderComponent,
    FoodEditorComponent
  ]
})
export class KcalModule { }
