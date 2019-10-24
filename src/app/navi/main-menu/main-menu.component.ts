import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {

  private selectedMenu = 'food';

  @Output() private menuSelection = new EventEmitter<string>();

  selectMenu(menu) {
    this.menuSelection.emit(menu);
    this.selectedMenu = menu;
  }

  constructor() { }

  ngOnInit() {
  }

}
