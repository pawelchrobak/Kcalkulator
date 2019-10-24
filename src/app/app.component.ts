import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Kcalkulator';
  private selectedPage: string = "food";

  showPage(menu) {
    let page = "food";

    if ( menu === "settings" ) {
      page = "settings";
    } else if ( menu === "charts" ) {
      page = "charts";
    }
    this.selectedPage = page;
    return page;
  }
}
