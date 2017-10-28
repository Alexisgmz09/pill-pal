import {Component, OnInit} from '@angular/core';
import {NavController} from 'ionic-angular';
import {StoreMedicine} from '../../../models/store.medicine.model';
import {StoreService} from '../../../services/store.service';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: 'cart.html'
})
export class CartComponent implements OnInit {
 cart: StoreMedicine[];
 total: number =0.0;

  constructor(public navCtrl: NavController, private _fb: FormBuilder, private storeService: StoreService) {
  }

  ngOnInit(): void {
    this.getCart();
    
  }
  getCart(): void{
    this.storeService.getCart().then(cart => {
        this.cart =cart;
        this.cart.forEach(p=>{this.total += p.price;});
    });
  }
}
