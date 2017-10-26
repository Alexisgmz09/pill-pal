import { Component, OnInit, ViewChild} from '@angular/core';
import { NavController } from 'ionic-angular';
import { PrescriptionsService } from '../../services/prescriptions.service';
import { Prescription } from '../../models/prescription.model';
import { Chart } from 'chart.js';


@Component({
  selector: 'page-today',
  templateUrl: 'today.html',
  providers:[PrescriptionsService]
})
export class TodayPage implements OnInit {

  @ViewChild('percentajeCanvas') presCanvas;
  presChart: any;
  prescriptions: Prescription[];

  constructor(public navCtrl: NavController, private prescriptionService: PrescriptionsService) {

  }
  ngOnInit(): void{
    this.getCurrentPrescriptions();
    this.presChart = new Chart(this.presCanvas.nativeElement,{
      type: 'pie',
      data: {
        datasets: [{
            data: [97,3],
            label: 'Treatment Percentaje',
            backgroundColor: [
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 99, 132, 0.2)'
            ]
        }],
    
        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: [
            'Completed',
            'Missed'
        ]
      }
    });
  }
  getCurrentPrescriptions(): void{
    this.prescriptionService.getCurrentPrescriptions().then(prescriptions => 
      this.prescriptions = prescriptions).catch(msg => console.log(msg));
  }
}
