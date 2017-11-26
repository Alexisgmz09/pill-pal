import { Injectable } from '@angular/core';
import { HttpModule, Http, Response,RequestOptions, Headers } from '@angular/http';
import { StoreMedicine } from '../models/store.medicine.model';
import { LoginService } from './login.service';
import { Card } from '../models/card.model';

@Injectable()
export class CardsService {
    
    constructor(private http: Http,private auth:LoginService){}

    saveCard(token:string,deviceId:string):Promise<Card>{
        return new Promise((resolve,reject)=>{
            this.auth.getAuth().then(auth=>{
                let headers= new Headers();
                headers.append('auth',auth);
                this.http.post(this.auth.apiUrl+'users/add_card',{
                    token:token,
                    device_session_id:deviceId
                },new RequestOptions({headers:headers}))
                .subscribe(res=>{
                    let card= res.json();
                    resolve(new Card(card.id,card.brand,card.last4,card.expirationMonth,card.ExpirationYear));
                },msg=>{
                    reject(msg);
                })
            }).catch(err=>{
                reject(err);
            })
        });
    }
    getCards():Promise<Card[]>{
        return new Promise((resolve,reject)=>{
            this.auth.getAuth().then(auth=>{
                let headers = new Headers();
                headers.append('auth',auth);
                this.http.get(this.auth.apiUrl+'users/cards', new RequestOptions({headers:headers}))
                .subscribe(res=>{
                    resolve(res.json().cards.map(card=>{
                        return new Card(card.id,card.brand,card.last4,card.expirationMonth,card.expirationYear)
                    }));
                },msg=>{
                    reject(msg);
                })
            }).catch(err=>{ 
                reject(err);
            })
        });
    }
}
