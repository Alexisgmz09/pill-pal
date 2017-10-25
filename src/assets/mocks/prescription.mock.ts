import {PrescriptionMedicine} from '../../models/prescription-medicine.model';
import {Prescription} from '../../models/prescription.model'

export let presArray: Prescription[] = [
    new Prescription('1', new PrescriptionMedicine('1a', 'Lozartan', '', '50 mg', 10), 1,2, '9:00 am, 9:00 pm', 5),
    new Prescription('2', new PrescriptionMedicine('2a', 'Ibuprofeno', '', '200 mg', 5), 1, 2, '7:00 am, 1:00 pm, 10:00 pm', 5),
    new Prescription('3', new PrescriptionMedicine('3a', 'Paracetamol', '', '30 mg', 1), 1, 2, '8:00 am, 8:00 pm', 5),
    new Prescription('4', new PrescriptionMedicine('4a', 'Omeprazol', '', '600 mg', 3), 1, 2, '2:00 pm', 5)
];
export let currentPresArray: Prescription[] =[
    new Prescription('1', new PrescriptionMedicine('1a', 'Lozartan', '', '50 mg', 10), 1,2, '9:00 pm', 5),
    new Prescription('2', new PrescriptionMedicine('2a', 'Ibuprofeno', '', '200 mg', 5), 1, 2, ' 10:00 pm', 5),
    new Prescription('3', new PrescriptionMedicine('3a', 'Paracetamol', '', '30 mg', 1), 1, 2, ' 8:00 pm', 5)
];