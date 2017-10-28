import { Geolocation } from '@ionic-native/geolocation';
export class LatLng {
    constructor(public lat:number,public lng:number){}
}
export class LocationService{
    constructor(private geoLocation:Geolocation){}
    getCurrentLocation():Promise<LatLng>{
        return new Promise((resolve,reject)=>{
            this.geoLocation.getCurrentPosition().then(position=>{
                resolve(new LatLng(position.coords.latitude,position.coords.longitude));
            },msg=>{
                reject(msg)
;            });
        });
    }
}