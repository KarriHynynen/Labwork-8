//-- Jonas Kivikoski / 1601557,	Karri Hynynen / 1601547, Kimmo Helminen / 1701401-->
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  nav:any;

  @ViewChild('username') user;
	@ViewChild('password') password;

  constructor(private alertCtrl: AlertController,public navCtrl: NavController, public navParams: NavParams) {
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  alert(message: string) {
    this.alertCtrl.create({
      title: 'Info!',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }


  signInUser() {
    
      this.alert('Success! You\'re logged in');
      this.navCtrl.setRoot('TabsPage');
      // user is logged in
    }
  
  public createAccount() {
    this.navCtrl.setRoot('RegisterPage');
  }
}
