import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { PrescriptionsPage } from '../pages/prescriptions/prescriptions';
import { StorePage } from '../pages/store/store';
import { TodayPage } from '../pages/today/today';
import { TabsPage } from '../pages/tabs/tabs';
import { MorePage} from '../pages/more/more'

import { AddPrescriptionComponent } from '../pages/prescriptions/add-prescription/add-prescription.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    PrescriptionsPage,
    StorePage,
    TodayPage,
    TabsPage,
    MorePage,
    AddPrescriptionComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      tabsHideOnSubPages: true
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PrescriptionsPage,
    StorePage,
    TodayPage,
    TabsPage,
    MorePage,
    AddPrescriptionComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
