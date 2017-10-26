import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Prescription} from '../../../models/prescription.model';
import {PrescriptionsService} from '../../../services/prescriptions.service';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import {OnInit} from '@angular/core';

@Component({
  selector: 'app-add-prescription',
  templateUrl: 'add-prescription.component.html',
  providers: [PrescriptionsService]
})
export class AddPrescriptionComponent implements OnInit {
  public prescriptionForm: FormGroup; // form model
  prescription: Prescription;

  constructor(public navCtrl: NavController, private _fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.prescriptionForm = this._fb.group({
      name: ['', [Validators.required, Validators.minLength(1)]],
      activeSubstance: ['', [Validators.required, Validators.minLength(1)]],
      dose: ['', [Validators.required, Validators.minLength(1)]],
      units: ['', [Validators.required, Validators.minLength(1), Validators.pattern('^[0-9]*$')]],
      treatmentTimes: this._fb.array([
        this.initTreatmentTime()
      ]),
      duration: ['', [Validators.required, Validators.minLength(1), Validators.pattern('^[0-9]*$')]]
    });
  }

  initTreatmentTime() {
    return this._fb.group({
      time: ['', [Validators.required]]
    })
  }

  addTreatmentTime() {
    const control = <FormArray>this.prescriptionForm.controls['treatmentTimes'];
    control.push(this.initTreatmentTime());
  }

  removeTreatmentTime(i: number) {
    const control = <FormArray>this.prescriptionForm.controls['treatmentTimes'];
    control.removeAt(i);
  }

  save(model: Prescription): void {
    console.log(model);
  }
}
