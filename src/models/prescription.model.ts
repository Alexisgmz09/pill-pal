import { PrescriptionMedicine } from './prescription-medicine.model';
import { DateTime } from "ionic-angular";

export class Prescription {
  constructor(public id: string, public medicine: PrescriptionMedicine,
              public frequency: DateTime[], public frequencyTxt: string) {}
}
