import { Injectable } from '@angular/core';
import { HttpModule, Http, Response } from '@angular/http';
import { StoreMedicine } from '../models/store.medicine.model';

@Injectable()
export class StoreService {

    constructor(private http: Http){}

    getMedicines():Promise<StoreMedicine[]>{
        return new Promise((resolve,reject) =>{
            console.log(this.http.get('../assets/mocks/store.products.mock.json').subscribe())
            
            resolve([]);
        });
    }
}
