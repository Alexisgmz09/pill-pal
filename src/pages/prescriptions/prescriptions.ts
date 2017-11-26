import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Prescription } from '../../models/prescription.model';
import { PrescriptionsService } from '../../services/prescriptions.service';
import { OnInit } from '@angular/core';
import { AddPrescriptionComponent } from './add-prescription/add-prescription.component';

@Component({
  selector: 'page-prescriptions',
  templateUrl: 'prescriptions.html'
})
export class PrescriptionsPage implements OnInit {

  prescriptions: Prescription[];

  constructor(public navCtrl: NavController, private prescriptionsService: PrescriptionsService) {

  }

  ngOnInit(): void {
    this.getPrescriptions();
  }

  getPrescriptions (): void {
    this.prescriptionsService.getPrescriptions().then(prescriptions =>
      this.prescriptions = prescriptions );
  }

  onAddPrescriptionClicked(): void {
    this.navCtrl.push(AddPrescriptionComponent, {

    });
  }
  deletePrescription(id:string): void {
    this.prescriptionsService.deletePrescription(id).then(prescriptions =>{
      this.prescriptions= prescriptions;
    }).catch(err=>{console.log('PAfgesController catch');console.log(err);})
  }
}
