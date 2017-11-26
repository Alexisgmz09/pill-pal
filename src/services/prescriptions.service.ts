import { Injectable } from '@angular/core';
import { Prescription} from '../models/prescription.model';
import { PrescriptionMedicine } from '../models/prescription-medicine.model';
import { presArray, currentPresArray } from '../assets/mocks/prescription.mock';
import { LoginService } from './login.service';
import { HttpModule, Http, Response, RequestOptions, Headers } from '@angular/http';

@Injectable()
export class PrescriptionsService {

  prescriptionsArray: Prescription[];
  currentPrescriptions: Prescription[];
  constructor(private auth:LoginService, private http:Http){}

  getPrescriptions(): Promise<Prescription[]> {
    return new Promise((resolve, reject)=>{
      this.auth.getAuth().then(auth=>{
        let headers = new Headers();
        headers.append('auth',auth);
        this.http.get(this.auth.apiUrl+'treatments', new RequestOptions({headers:headers}))
        .subscribe(res=>{
          resolve(res.json().treatments.map(treat=>{
            return new Prescription(treat.id,
              new PrescriptionMedicine(treat.medicine.id,treat.medicine.name,
                treat.medicine.activeSubstance,treat.medicine.dose,
                treat.medicine.units),treat.frequency.map(freq=>{
              return new Date(Date.parse("01/01/1970 " + freq.hours +':'+freq.minutes));
            }),treat.frequencyTxt,treat.duration);
          }))
        },msg=>{
          reject(msg);
        })
      }).catch(err=>{
        reject(err);
      })
    });
  }
  getCurrentPrescriptions(): Promise<Prescription[]>{
    if(this.currentPrescriptions === undefined){
      this.currentPrescriptions = currentPresArray;
    }
    return Promise.resolve(this.currentPrescriptions);
  }

  savePrescription(prescription: Prescription): Promise<boolean> {
    return new Promise( (resolve, reject) => {
      this.auth.getAuth().then(auth=>{
        let headers = new Headers();
        headers.append('auth',auth);
        this.http.post(this.auth.apiUrl+'treatments',{
          medicine:{
            name:prescription.medicine.name,
            dose:prescription.medicine.dose,
            activeSubstance:prescription.medicine.activeSubstance,
            units:prescription.medicine.units
          },
          frequency: prescription.frequency.map(function(freq){
            return {hours:freq.getHours(),minutes:freq.getMinutes()}
          }),
          frequencyTxt:prescription.frequencyTxt,
          duration:prescription.duration
        },new RequestOptions({headers:headers}))
        .subscribe(res=>{
          resolve(true);
        }, msg=>{
          reject(msg.json());
        })
      }).catch(err=>{
        reject(err);
      });
    });
  }
  deletePrescription(id:string): Promise<Prescription[]>{
    return new Promise((resolve,reject)=>{
      this.auth.getAuth().then(auth=>{
        let headers= new Headers();
        headers.append('auth',auth);
        this.http.delete(this.auth.apiUrl+'treatments/'+id, new RequestOptions({headers:headers}))
        .subscribe(res=>{
          console.log(res);
          console.log('Llegue bien');
          resolve(res.json().treatments.map(treat=>{
            return new Prescription(treat.id,
              new PrescriptionMedicine(treat.medicine.id,treat.medicine.name,
                treat.medicine.activeSubstance,treat.medicine.dose,
                treat.medicine.units),treat.frequency.map(freq=>{
              return new Date(Date.parse("01/01/1970 " + freq.hours +':'+freq.minutes));
            }),treat.frequencyTxt,treat.duration);
          }));
        },msg=>{
          console.log(msg);
          reject(msg);
        })
      }).catch(err=>{
        reject(err);
      })
    });
  }
}
