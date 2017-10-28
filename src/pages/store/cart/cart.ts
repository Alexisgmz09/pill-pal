import {Component, OnInit,ViewChild,ElementRef} from '@angular/core';
import {NavController} from 'ionic-angular';
import {StoreMedicine} from '../../../models/store.medicine.model';
import {StoreService} from '../../../services/store.service';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { LocationService } from '../../../services/location.service';
import { Geolocation} from '@ionic-native/geolocation';

declare var google;
@Component({
  selector: 'app-cart',
  templateUrl: 'cart.html'
})
export class CartComponent implements OnInit {
  mapLoaded: boolean = false;

  @ViewChild('map') mapElement: ElementRef;
  map:any;
  cart: StoreMedicine[];
  total: number =0.0;

  constructor(public navCtrl: NavController, private _fb: FormBuilder, private storeService: StoreService, private geolocation:Geolocation) {
  }
  ionViewDidLoad(){
    this.loadMap();
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
  loadMap():void{
      this.geolocation.getCurrentPosition().then(latlng=>{
        latlng = new google.maps.LatLng(latlng.coords.latitude,latlng.coords.longitude);
        let mapOptions = {
            center: latlng,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
          };
        this.map = new google.maps.Map(this.mapElement.nativeElement,mapOptions);
        this.mapLoaded = true;
        let marker = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            position: this.map.getCenter()
          });
      },(err)=>{
          console.log(err);
      });

  }
}
