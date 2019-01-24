import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SportInfoPage } from './sport-info';

@NgModule({
  declarations: [
    SportInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(SportInfoPage),
  ],
  exports: [
    SportInfoPage
  ],
})
export class SportInfoPageModule {}
