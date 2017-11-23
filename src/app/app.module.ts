import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';

import { PrescriptionsPage } from '../pages/prescriptions/prescriptions';
import { StorePage } from '../pages/store/store';
import { TodayPage } from '../pages/today/today';
import { TabsPage } from '../pages/tabs/tabs';
import { MorePage} from '../pages/more/more';
import { LoginPage } from '../pages/login/login';

import { AddPrescriptionComponent } from '../pages/prescriptions/add-prescription/add-prescription.component';
import { CartComponent } from '../pages/store/cart/cart';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Geolocation } from '@ionic-native/geolocation';
import {PrescriptionsService} from '../services/prescriptions.service';
import { StoreService } from '../services/store.service';
import { LocationService } from '../services/location.service';

import { Facebook } from '@ionic-native/facebook';

@NgModule({
  declarations: [
    MyApp,
    PrescriptionsPage,
    StorePage,
    TodayPage,
    TabsPage,
    MorePage,
    AddPrescriptionComponent,
    CartComponent,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      tabsHideOnSubPages: true
    }),
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PrescriptionsPage,
    StorePage,
    TodayPage,
    TabsPage,
    MorePage,
    AddPrescriptionComponent,
    CartComponent,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    PrescriptionsService,
    StoreService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Facebook
  ]
})
export class AppModule {}
