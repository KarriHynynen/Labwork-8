// Jonas Kivikoski / 1601557,	Karri Hynynen / 1601547, Kimmo Helminen / 1701401
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';

//welcome Page
import { WelcomePage } from '../pages/welcome/welcome';
import { LoginPage } from '../pages/login/login';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule } from '@angular/http';



const firebaseAuth = {
  apiKey: "AIzaSyA190GH8V8h8FbubPXeIhbaZ76DGut5jO0",
  authDomain: "labwork-8-4f162.firebaseapp.com",
  databaseURL: "https://labwork-8-4f162.firebaseio.com",
  projectId: "labwork-8-4f162",
  storageBucket: "labwork-8-4f162.appspot.com",
  messagingSenderId: "646353865776"
  };

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    WelcomePage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
   
    WelcomePage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    
  ]
  
})
export class AppModule {}