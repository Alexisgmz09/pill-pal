import { PrescriptionMedicine } from './prescription-medicine.model';

export class Prescription {
  constructor(public id: string, public medicine: PrescriptionMedicine,
              public compartment: number, public frequency: number, public frequencyTxt: string,
              public duration: number) {}
}
