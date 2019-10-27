import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { SettingsComponent } from './settings/settings.component';
import { KcalModule } from '../kcal/kcal.module';



@NgModule({
  declarations: [MainComponent, SettingsComponent],
  imports: [
    CommonModule,
    KcalModule
  ],
  exports: [
    MainComponent,
    SettingsComponent
  ]
})
export class SubpagesModule { }
