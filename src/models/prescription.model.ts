import { PrescriptionMedicine } from './prescription-medicine.model';

export class Prescription {
  constructor(public id: string, public medicine: PrescriptionMedicine,
              public frequency: Date, public frequencyTxt: string, public duration: number) {}
}
