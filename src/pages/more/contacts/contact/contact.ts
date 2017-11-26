import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Validators, FormGroup, FormArray, FormBuilder  } from '@angular/forms';
import { OnInit } from '@angular/core';
import { TabsPage } from '../../../tabs/tabs';
import { ContactsService } from '../../../../services/contacts.service';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage implements OnInit {
   public prescriptionForm: FormGroup;
    public deviceSessionId;
  constructor(public navCtrl: NavController,
    private _fb: FormBuilder, public contServ:ContactsService) {
    
  }

  ngOnInit(){
    this.prescriptionForm = this._fb.group({
      contact: ['', [Validators.required, Validators.minLength(1)]]
    });
   
  }
  save(model:FormGroup):void{
   
    this.contServ.saveConact(model.controls.contact.value).then(res=>{
        this.navCtrl.setRoot(TabsPage);
    }).catch(err=>{
    console.log(err);
    });
  }
}