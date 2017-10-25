import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Prescription} from '../../../models/prescription.model';
import {PrescriptionsService} from '../../../services/prescriptions.service';
import {OnInit} from '@angular/core';

@Component({
  selector: 'app-add-prescription',
  templateUrl: 'add-prescription.component.html',
  providers: [PrescriptionsService]
})
export class AddPrescriptionComponent implements OnInit {

  prescription: Prescription;

  constructor(public navCtrl: NavController) {
  }

  ngOnInit(): void {
  }
}
