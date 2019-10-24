import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NaviModule } from './navi/navi.module';
import { KcalModule } from './kcal/kcal.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NaviModule,
    KcalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
