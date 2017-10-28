import { Injectable } from '@angular/core';
import { HttpModule, Http, Response } from '@angular/http';
import { StoreMedicine } from '../models/store.medicine.model';

@Injectable()
export class StoreService {
    cart: StoreMedicine[];
    constructor(private http: Http){}

    getMedicines():Promise<StoreMedicine[]>{
        return new Promise((resolve,reject) =>{
            this.http.get(
                '../assets/mocks/store.products.mock.json')
                .subscribe(
                res => {
                const products = res.json();
                const medicinesResults: StoreMedicine[] = [];
                products.products.forEach(product => {
                    medicinesResults.push(
                    new StoreMedicine(product.id,
                        product.name,
                        product.active_substance,
                        product.dose,
                        product.price));
                });
            resolve(medicinesResults);
            },msg => {
                reject(msg);
            });
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
