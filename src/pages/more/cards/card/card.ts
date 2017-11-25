import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Validators, FormGroup, FormArray, FormBuilder  } from '@angular/forms';
import { OnInit } from '@angular/core';

declare var jQuery:any;
declare var OpenPay:any;

@Component({
  selector: 'page-card',
  templateUrl: 'card.html'
})
export class CardPage implements OnInit {
   public prescriptionForm: FormGroup;
    public deviceSessionId;
  constructor(public navCtrl: NavController,private _fb: FormBuilder,) {
    console.log(OpenPay);
    OpenPay.setId('m6l9ig4gbsmqaxftlujo');
    OpenPay.setApiKey('pk_34b1d91350b64727a8440feabb6efd6e');
    OpenPay.setSandboxMode(true);
    this.deviceSessionId = OpenPay.deviceData.setup()
    this.prescriptionForm = this._fb.group({
        name: ['', [Validators.required, Validators.minLength(1)]],
        number: ['', [Validators.required, Validators.minLength(1)]],
        cvv2: ['', [Validators.required, Validators.minLength(1)]],
        expiration_month: ['', [Validators.required, Validators.minLength(1), Validators.pattern(/([0][1-9])|([1][0-2])/i)]],
        expiration_year: ['', [Validators.required, Validators.minLength(1), Validators.pattern(/[0-9]{2}/i)]]
      });
  }

  ngOnInit(){
    
  }
}