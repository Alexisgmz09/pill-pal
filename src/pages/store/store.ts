import { Component, OnInit} from '@angular/core';
import { NavController } from 'ionic-angular';
import { StoreService } from '../../services/store.service';
import { StoreMedicine } from '../../models/store.medicine.model';

@Component({
  selector: 'page-store',
  templateUrl: 'store.html'
})
export class StorePage implements OnInit{
  products:StoreMedicine[];
  cart:StoreMedicine[]=[];
  constructor(public navCtrl: NavController, private storeService: StoreService) {

  }
  ngOnInit():void{
    this.getMedicines();
  }
  getMedicines():void{
    this.storeService.getMedicines().then(
      medicines => { this.products=medicines;}
    ).catch(msg => {console.log(msg)});
  }
  addToCart(medicine:StoreMedicine):void{
    this.cart.push(medicine);
  }
}
