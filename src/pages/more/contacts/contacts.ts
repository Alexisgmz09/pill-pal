import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ContactPage } from './contact/contact';
import { OnInit } from '@angular/core';
import { ContactsService } from '../../../services/contacts.service';

@Component({
  selector: 'page-contacts',
  templateUrl: 'contacts.html'
})
export class ContactsPage implements OnInit{
  contacts:string[];
  constructor(public navCtrl: NavController, private contServ:ContactsService) {

  }
  ngOnInit(){
    this.getContacts().then(contacts=>{
      this.contacts = contacts;
    }).catch(err=>{
      console.log(err);
    })
  }
  getContacts():Promise<string[]>{
    return this.contServ.getContacts();
  }
  onContactAdd():void{
      this.navCtrl.push(ContactPage);
  }
  deleteContact(id:string): void {
    this.contServ.deleteContact(id).then(contacts =>{
      this.contacts= contacts;
    }).catch(err=>{console.log(err);})
  }
  
}