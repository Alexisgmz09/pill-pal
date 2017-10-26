import { Component, OnInit} from '@angular/core';
import { NavController } from 'ionic-angular';
import { PrescriptionsService } from '../../services/prescriptions.service';
import { Prescription } from '../../models/prescription.model';

@Component({
  selector: 'page-today',
  templateUrl: 'today.html',
  providers:[PrescriptionsService]
})
export class TodayPage implements OnInit {
  prescriptions: Prescription[];

  constructor(public navCtrl: NavController, private prescriptionService: PrescriptionsService) {

  }
  ngOnInit(): void{
    this.getCurrentPrescriptions();
  }
  getCurrentPrescriptions(): void{
    this.prescriptionService.getCurrentPrescriptions().then(prescriptions => 
      this.prescriptions = prescriptions).catch(msg => console.log(msg));
  }
}
