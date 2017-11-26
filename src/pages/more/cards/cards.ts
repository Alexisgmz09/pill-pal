import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CardPage } from './card/card';
import { OnInit } from '@angular/core';
import { CardsService } from '../../../services/cards.service';
import { Card } from '../../../models/card.model';

@Component({
  selector: 'page-cards',
  templateUrl: 'cards.html'
})
export class CardsPage implements OnInit{
  cards:Card[];
  constructor(public navCtrl: NavController, private cardServ:CardsService) {

  }
  ngOnInit(){
    this.getCards().then(cards=>{
      this.cards = cards;
    }).catch(err=>{
      console.log(err);
    })
  }
  getCards():Promise<Card[]>{
    return this.cardServ.getCards();
  }
  onCardAdd():void{
      this.navCtrl.push(CardPage);
  }
}