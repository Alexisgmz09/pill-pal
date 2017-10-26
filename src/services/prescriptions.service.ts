import { Injectable } from '@angular/core';
import { Prescription} from '../models/prescription.model';
import { PrescriptionMedicine } from '../models/prescription-medicine.model';
import { presArray, currentPresArray } from '../assets/mocks/prescription.mock';

@Injectable()
export class PrescriptionsService {

  prescriptionsArray: Prescription[];
  currentPrescriptions: Prescription[];

  getPrescriptions(): Promise<Prescription[]> {
    if(this.prescriptionsArray === undefined){
      this.prescriptionsArray=presArray;
    }
    return Promise.resolve(this.prescriptionsArray);
  }
  getCurrentPrescriptions(): Promise<Prescription[]>{
    if(this.currentPrescriptions === undefined){
      this.currentPrescriptions = currentPresArray;
    }
    return Promise.resolve(this.currentPrescriptions);
  }
}
