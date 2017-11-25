import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginService } from '../../services/login.service';
import { TabsPage } from '../tabs/tabs';
 
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  userData: any;
 
  constructor(private navController:NavController, private facebook: Facebook, private login:LoginService) { }
 
  loginWithFB() {
    this.facebook.login(['email', 'public_profile']).then((response: FacebookLoginResponse) => {
        console.log(response.authResponse.accessToken);
      this.facebook.api('me?fields=id,name,email,first_name,picture.width(720).height(720).as(picture_large)', []).then(profile => {
        this.login.loginApi(response.authResponse.accessToken).then(res=>{
          console.log('Antes de set nav contorller');  
          this.navController.setRoot(TabsPage);
        }).catch(err=>{
            console.log('estoy en error');
            this.userData =err.json();
        });
        this.userData = {email: response.authResponse.accessToken, first_name: profile['first_name'], picture: profile['picture_large']['data']['url'], username: profile['name']}
      });
    });
  }
}