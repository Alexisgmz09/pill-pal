import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Validators, FormGroup, FormArray, FormBuilder  } from '@angular/forms';

@Component({
  selector: 'page-card',
  templateUrl: 'card.html'
})
export class CardPage {
   public prescriptionForm: FormGroup;

  constructor(public navCtrl: NavController,private _fb: FormBuilder,) {
    this.prescriptionForm = this._fb.group({
        name: ['', [Validators.required, Validators.minLength(1)]],
        number: ['', [Validators.required, Validators.minLength(1)]],
        cvv2: ['', [Validators.required, Validators.minLength(1)]],
        expiration_month: ['', [Validators.required, Validators.minLength(1), Validators.pattern(/([0][1-9])|([1][0-2])/i)]],
        expiration_year: ['', [Validators.required, Validators.minLength(1), Validators.pattern(/[0-9]{2}/i)]]
      });
  }

  
}