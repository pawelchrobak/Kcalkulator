import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FoodItem } from '../../food-item';

@Component({
  selector: 'app-food-item-row',
  templateUrl: './food-item-row.component.html',
  styleUrls: ['./food-item-row.component.scss']
})
export class FoodItemRowComponent implements OnInit {

  @Input() private foodItem:FoodItem;
  @Output() private foodItemChange = new EventEmitter<object>();
  private foodItemData: FormGroup;
  private editing: boolean = false;
  private buttonEdit: string = "Edytuj";
  private buttonSave: string = "Zapisz";
  private buttonDelete: string = "Usuń";
  private buttonCancel: string = "Anuluj";
  private editMode: boolean = false;
  private currentAction: string = this.buttonEdit;
  
  enterEditMode() {
    this.foodItemData.controls.name.enable();
    this.foodItemData.controls.kcal.enable();
    this.editMode = true;
  }

  exitEditMode() {
    this.foodItemData.controls.name.disable();
    this.foodItemData.controls.kcal.disable();
    this.editMode = false;

  }

  cancelChanges() {
    this.foodItemData.controls.name.setValue(this.foodItem.$name);
    this.foodItemData.controls.kcal.setValue(this.foodItem.$kcal);
    this.exitEditMode();
  }

  onSubmit() {
    // switch(this.currentAction) {
    //   case this.buttonEdit:
    //     this.editing = true;
    //     this.currentAction = this.buttonSave;
    //     console.log(`rozpoczęto edycję elementu o id:${this.foodItem.$id}`);
    //     break;
    //   case this.buttonSave:
    //     this.editing = false;
    //     this.currentAction = this.buttonEdit;
    //     console.log('zapisano zmiany');
    //     break;
    // }
  }
  
  editItem() {
    this.foodItemChange.emit({
      action: "edit",
      foodItem: this.foodItem,
      formValues: this.foodItemData.value
    });
    this.exitEditMode();
  }

  deleteItem() {
    this.foodItemChange.emit({
      action: "delete",
      foodItem: this.foodItem
    });
  }


  constructor() { }
  
  ngOnInit() {
    this.foodItemData = new FormGroup({
      name: new FormControl(this.foodItem.$name),
      kcal: new FormControl(this.foodItem.$kcal)
    })
    this.foodItemData.controls.name.disable();
    this.foodItemData.controls.kcal.disable();
  }

}
