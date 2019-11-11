import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MealAdderComponent } from './meal-adder/meal-adder.component';
import { FoodEditorComponent } from './food-editor/food-editor.component';
import { FoodItemRowComponent } from './food-editor/food-item-row/food-item-row.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FoodItemAdderComponent } from './food-editor/food-item-adder/food-item-adder.component';
import { KcalStatusComponent } from './kcal-status/kcal-status.component';
import { MealHistoryComponent } from './meal-history/meal-history.component';
import { ChartComponent } from './chart/chart.component';
import { LimitSetterComponent } from './limit-setter/limit-setter.component';
import { DataExportComponent } from './data-export/data-export.component';



@NgModule({
  declarations: [
    MealAdderComponent,
    FoodEditorComponent,
    FoodItemRowComponent,
    FoodItemAdderComponent,
    KcalStatusComponent,
    MealHistoryComponent,
    ChartComponent,
    LimitSetterComponent,
    DataExportComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    MealAdderComponent,
    FoodEditorComponent,
    FoodItemRowComponent,
    LimitSetterComponent,
    KcalStatusComponent,
    ChartComponent,
    MealHistoryComponent,
    DataExportComponent
  ]
})
export class KcalModule { }
