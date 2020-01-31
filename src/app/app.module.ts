import { NgModule, ViewChild } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, RouterModule } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { DeviceDetectorModule } from 'ngx-device-detector';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Network } from '@ionic-native/network/ngx';

import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFireAuthModule } from "angularfire2/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDoCXfX9JLUS0yePIM3vKXHah2uNKYDJ0o",
  authDomain: "gbc-navigation-app.firebaseapp.com",
  databaseURL: "https://gbc-navigation-app.firebaseio.com",
  projectId: "gbc-navigation-app",
  storageBucket: "gbc-navigation-app.appspot.com",
  messagingSenderId: "1038586060193",
  appId: "1:1038586060193:web:cd65a4ca8a7a910ec2ffe0"
  //messengerId for google analytics
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, RouterModule, DeviceDetectorModule.forRoot()],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    DeviceDetectorModule,
    Geolocation,
    Network,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
