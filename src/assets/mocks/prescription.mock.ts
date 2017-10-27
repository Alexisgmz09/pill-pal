import {PrescriptionMedicine} from '../../models/prescription-medicine.model';
import {Prescription} from '../../models/prescription.model'

export let presArray: Prescription[] = [
    new Prescription('1', new PrescriptionMedicine('1a', 'Lozartan', '', '50 mg', 10),[
      new Date(Date.parse("01/01/1970 " + "09:00")),
      new Date(Date.parse("01/01/1970 " + "21:00"))
    ], '9:00 am, 9:00 pm', 2),
    new Prescription('2', new PrescriptionMedicine('2a', 'Ibuprofeno', '', '200 mg', 5),[
      new Date(Date.parse("01/01/1970 " + "07:00")),
      new Date(Date.parse("01/01/1970 " + "13:00")),
      new Date(Date.parse("01/01/1970 " + "22:00"))
    ], '7:00 am, 1:00 pm, 10:00 pm', 2),
    new Prescription('3', new PrescriptionMedicine('3a', 'Paracetamol', '', '30 mg', 1), [
      new Date(Date.parse("01/01/1970 " + "08:00")),
      new Date(Date.parse("01/01/1970 " + "20:00"))
    ], '8:00 am, 8:00 pm', 3),
    new Prescription('4', new PrescriptionMedicine('4a', 'Omeprazol', '', '600 mg', 3), [
      new Date(Date.parse("01/01/1970 " + "14:00"))
    ], '2:00 pm', 4)
];
export let currentPresArray: Prescription[] =[
    new Prescription('1', new PrescriptionMedicine('1a', 'Lozartan', '', '50 mg', 10), [
      new Date(Date.parse("01/01/1970 " + "21:00"))
    ], '9:00 pm', 5),
    new Prescription('2', new PrescriptionMedicine('2a', 'Ibuprofeno', '', '200 mg', 5), [
      new Date(Date.parse("01/01/1970 " + "22:00"))
    ], ' 10:00 pm', 6),
    new Prescription('3', new PrescriptionMedicine('3a', 'Paracetamol', '', '30 mg', 1), [
      new Date(Date.parse("01/01/1970 " + "20:00"))
    ], ' 8:00 pm', 7)
];
