import { Injectable } from '@angular/core';
import { HttpModule, Http, Response,RequestOptions, Headers } from '@angular/http';
import { StoreMedicine } from '../models/store.medicine.model';
import { LoginService } from './login.service';

@Injectable()
export class StoreService {
    cart: StoreMedicine[];
    constructor(private http: Http,private auth:LoginService){}

    getMedicines():Promise<StoreMedicine[]>{
        return new Promise((resolve,reject) =>{
            this.auth.getAuth().then(auth=>{
                let headers = new Headers();
                headers.append('auth',auth);
                this.http.get(
                    this.auth.apiUrl+'medicines',new RequestOptions({
                        headers:headers
                    }))
                    .subscribe(
                    res => {
                    const products = res.json();
                    console.log(res);
                    console.log(products);
                    const medicinesResults: StoreMedicine[] = [];
                    products.medicines.forEach(product => {
                        medicinesResults.push(
                        new StoreMedicine(product.id,
                            product.name,
                            product.activeSubstance,
                            product.dose,
                            product.price));
                    });
                resolve(medicinesResults);
                },msg => {
                    reject(msg);
                });
            })  
        });
    }
    getCart(): Promise<StoreMedicine[]>{
        return new Promise((resolve,reject)=>{
            if(this.cart && this.cart.length>0){
                resolve(this.cart);
            }else{
                reject("The shopping cart is empty");
            }
        });
    }
    addCart(cart:StoreMedicine[]):void{
        this.cart = cart;
    }
}
