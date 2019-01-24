import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {SingleContactComponent} from "../components/single-contact/single-contact";
import {FormContactComponent} from "../components/form-contact/form-contact";
import {SportInfoPage} from "../pages/sport-info/sport-info";
import {ListContactComponent} from "../components/list-contact/list-contact";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    SingleContactComponent,
    FormContactComponent,
    ListContactComponent,
    SportInfoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    FormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    SingleContactComponent,
    FormContactComponent,
    ListContactComponent,
    SportInfoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
