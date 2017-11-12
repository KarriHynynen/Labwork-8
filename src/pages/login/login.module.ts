// Jonas Kivikoski / 1601557,	Karri Hynynen / 1601547, Kimmo Helminen / 1701401-->
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';

@NgModule({
  declarations: [
    LoginPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
  ],
  exports: [
    LoginPage
  ]
})
export class LoginModule {}
