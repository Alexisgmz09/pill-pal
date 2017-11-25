import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CardPage } from './card/card';

@Component({
  selector: 'page-cards',
  templateUrl: 'cards.html'
})
export class CardsPage {

  constructor(public navCtrl: NavController) {

  }
  onCardAdd():void{
      this.navCtrl.push(CardPage);
  }
}