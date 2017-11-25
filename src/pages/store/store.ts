import { Component, OnInit} from '@angular/core';
import { NavController } from 'ionic-angular';
import { StoreService } from '../../services/store.service';
import { StoreMedicine } from '../../models/store.medicine.model';
import { CartComponent } from './cart/cart';
import { LoginService } from '../../services/login.service';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-store',
  templateUrl: 'store.html'
})
export class StorePage implements OnInit{
  logged:boolean;
  products:StoreMedicine[];
  cart:StoreMedicine[]=[];
  constructor(public navCtrl: NavController, private storeService: StoreService,
          private authService:LoginService) {

  }
  ngOnInit():void{
    this.authService.validateSession().then(res=>{
      this.getMedicines();
    }).catch(err=>{
      console.log('Loginpage');
      console.log(err);
      this.navCtrl.push(LoginPage);
    });    
  }
  getMedicines():void{
    this.storeService.getMedicines().then(
      medicines => { this.products=medicines;}
    ).catch(msg => {console.log(msg)});
  }
  addToCart(medicine:StoreMedicine):void{
    this.cart.push(medicine);
  }
  goToCart():void{
    if(this.cart && this.cart.length>0){
      this.storeService.addCart(this.cart);
      this.navCtrl.push(CartComponent,{});
    }
  }
  
}
