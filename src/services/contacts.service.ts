import { Injectable } from '@angular/core';
import { HttpModule, Http, Response,RequestOptions, Headers } from '@angular/http';
import { LoginService } from './login.service';

@Injectable()
export class ContactsService {
    
    constructor(private http: Http,private auth:LoginService){}

    saveConact(contact:string):Promise<String>{
        return new Promise((resolve,reject)=>{
            this.auth.getAuth().then(auth=>{
                let headers= new Headers();
                headers.append('auth',auth);
                this.http.post(this.auth.apiUrl+'contacts',{
                    contact:contact
                },new RequestOptions({headers:headers}))
                .subscribe(res=>{
                    resolve(res.json().contact);
                },msg=>{
                    reject(msg);
                })
            }).catch(err=>{
                reject(err);
            })
        });
    }
    getContacts():Promise<string[]>{
        return new Promise((resolve,reject)=>{
            this.auth.getAuth().then(auth=>{
                let headers = new Headers();
                headers.append('auth',auth);
                this.http.get(this.auth.apiUrl+'contacts', new RequestOptions({headers:headers}))
                .subscribe(res=>{
                    resolve(res.json().contacts);
                },msg=>{
                    reject(msg);
                })
            }).catch(err=>{ 
                reject(err);
            })
        });
    }
    deleteContact(id:string): Promise<string[]>{
        return new Promise((resolve,reject)=>{
          this.auth.getAuth().then(auth=>{
            let headers= new Headers();
            headers.append('auth',auth);
            this.http.delete(this.auth.apiUrl+'contacts/', new RequestOptions({headers:headers,body:{contact:id}}))
            .subscribe(res=>{
              console.log(res);
              resolve(res.json().contacts);
            },msg=>{
              console.log(msg);
              reject(msg);
            })
          }).catch(err=>{
            reject(err);
          })
        });
      }
}