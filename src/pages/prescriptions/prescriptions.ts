import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Prescription } from '../../models/prescription.model';
import { PrescriptionsService } from '../../services/prescriptions.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'page-prescriptions',
  templateUrl: 'prescriptions.html',
  providers: [PrescriptionsService]
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

}
