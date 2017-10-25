import { Component } from '@angular/core';

import { PrescriptionsPage } from '../prescriptions/prescriptions';
import { StorePage } from '../store/store';
import { TodayPage } from '../today/today';
import { MorePage } from '../more/more'

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = TodayPage;
  tab2Root = PrescriptionsPage;
  tab3Root = StorePage;
  tab4Root = MorePage;

  constructor() {

  }
}
