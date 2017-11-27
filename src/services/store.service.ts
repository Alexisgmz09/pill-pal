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
    buy(sessionId:string):Promise<any>{
        return new Promise((resolve,reject)=>{
            this.auth.getAuth().then(auth=>{
                console.log(auth);
                let headers = new Headers();
                headers.append('auth',auth);
                this.http.get(this.auth.apiUrl+'users/cards',
                    new RequestOptions({headers:headers})
                ).subscribe(cards=>{
                    if(cards.json().cards.length>0){
                        this.http.post(this.auth.apiUrl+'medicines/store/buy',{
                            medicines:this.cart.map(med=>{
                                return med.id;
                            }),
                            cardId:cards.json().cards[0].id,
                            deviceSessionId:sessionId
                        }, new RequestOptions({headers:headers})).subscribe(res=>{
                            this.cart = [];
                            resolve(res.json());
                        },msg=>{
                            reject(msg);
                        });
                    }else{
                        reject('No tienes tarjeta');
                    }
                },msg=>{
                    reject(msg);
                });
            }).catch(err=>{
                reject(err);
            });
        });

    }
}
