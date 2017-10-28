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
import { MorePage} from '../pages/more/more'

import { AddPrescriptionComponent } from '../pages/prescriptions/add-prescription/add-prescription.component';
import { CartComponent } from '../pages/store/cart/cart';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {PrescriptionsService} from '../services/prescriptions.service';
import { StoreService } from '../services/store.service';
@NgModule({
  declarations: [
    MyApp,
    PrescriptionsPage,
    StorePage,
    TodayPage,
    TabsPage,
    MorePage,
    AddPrescriptionComponent,
    CartComponent
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
    CartComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    PrescriptionsService,
    StoreService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
