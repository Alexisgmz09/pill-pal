import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CardsPage } from './cards/cards';
import { ContactsPage } from './contacts/contacts';

@Component({
  selector: 'page-more',
  templateUrl: 'more.html'
})
export class MorePage {

  constructor(public navCtrl: NavController) {

  }
  seeCards():void{
    this.navCtrl.push(CardsPage);
  }
  seeContacts():void{
    this.navCtrl.push(ContactsPage);
  }
}
