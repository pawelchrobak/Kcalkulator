import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NaviModule } from './navi/navi.module';
import { KcalModule } from './kcal/kcal.module';
import { SubpagesModule } from './subpages/subpages.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NaviModule,
    KcalModule,
    SubpagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
