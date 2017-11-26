import { Injectable } from '@angular/core'; 
import { Storage } from '@ionic/storage';
import { HttpModule, Http, Response, RequestOptions, Headers } from '@angular/http';
import { Header } from 'ionic-angular/components/toolbar/toolbar-header';


@Injectable()
export class LoginService{
    apiUrl:string = 'http://192.168.100.5:3000/';
    constructor(private storage:Storage, private http:Http){}
    saveAuth(auth:string):void{
        console.log(auth);
        this.storage.set('authT',auth);  
    }
    loginApi(auth:string):Promise<any>{
        return new Promise((resolve, reject)=>{
            let headers = new Headers();
            headers.append('auth',auth);
            this.http.get(this.apiUrl+'users/test',new RequestOptions({
                headers:headers
            })).subscribe(res=>{
                console.log('Made respuesta correcta a usres/test');
                this.saveAuth(auth);
                resolve(res.json());
            }, (err)=>{
                console.log('estoy en error de service');
                console.log(err);
                if(err.status == 400){
                    this.registerRequest(auth).then(res=>{
                        this.saveAuth(auth);
                        resolve(res.json());
                    }).catch(err2=>{
                        reject(err2);
                    })
                }else/* if(err.status == 401)*/{
                    reject(err);
                }
            });
        })
    }
    registerRequest(auth:string): Promise<Response>{
        return new Promise((resolve,reject)=>{
            let headers = new Headers();
            headers.append('auth',auth);
            this.http.post(this.apiUrl+'users/register',{},new RequestOptions({headers:headers}))
            .subscribe(res=>{
                resolve(res);
            },err=>{
                reject(err)
            });
        });
    }
    validateSession():Promise<any>{
        return new Promise((resolve,reject)=>{
            this.storage.get('authT').then(auth=>{
                console.log(auth);
                let headers = new Headers();
                headers.append('auth',auth);
                this.http.get(this.apiUrl+'users/test',new RequestOptions({
                    headers:headers
                })).subscribe(res=>{
                    resolve(res.json());
                }, (err)=>{
                    this.storage.remove('authT');
                    reject(err);
                });
            })
        })
    }
    getAuth():Promise<string>{
        return this.storage.get('authT');
    }
}