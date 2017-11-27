import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Validators, FormGroup, FormArray, FormBuilder  } from '@angular/forms';
import { OnInit } from '@angular/core';
import { CardsService } from '../../../../services/cards.service';
import { TabsPage } from '../../../tabs/tabs';

declare var jQuery:any;
declare var OpenPay:any;

@Component({
  selector: 'page-card',
  templateUrl: 'card.html'
})
export class CardPage implements OnInit {
   public prescriptionForm: FormGroup;
    public deviceSessionId;
  constructor(public navCtrl: NavController,
    private _fb: FormBuilder, public cardServ:CardsService) {
    
  }

  ngOnInit(){
    this.prescriptionForm = this._fb.group({
      holder_name: ['', [Validators.required, Validators.minLength(1)]],
      card_number: ['', [Validators.required, Validators.minLength(1)]],
      cvv2: ['', [Validators.required, Validators.minLength(1)]],
      expiration_month: ['', [Validators.required, Validators.minLength(1), Validators.pattern(/([0][1-9])|([1][0-2])/i)]],
      expiration_year: ['', [Validators.required, Validators.minLength(1), Validators.pattern(/[0-9]{2}/i)]]
    });
    OpenPay.setId('m6l9ig4gbsmqaxftlujo');
    OpenPay.setApiKey('pk_34b1d91350b64727a8440feabb6efd6e');
    OpenPay.setSandboxMode(true);
    this.deviceSessionId = OpenPay.deviceData.setup();
  }
  save(model:FormGroup):void{
    OpenPay.token.create({
      holder_name:model.controls.holder_name.value,
      card_number: model.controls.card_number.value,
      expiration_month:model.controls.expiration_month.value,
      expiration_year: model.controls.expiration_year.value,
      cvv2:model.controls.cvv2.value
    },token=>{
      console.log(token.data);
      this.cardServ.saveCard(token.data.id,this.deviceSessionId).then(res=>{
        this.navCtrl.setRoot(TabsPage);
      }).catch(err=>{
        console.log(err);
      })
    },err=>{
      console.log(err);
    })
  }
}