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

import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFireAuthModule } from "angularfire2/auth";

const firebaseConfig = {
  apiKey: "M8tZy9BsVk7Gfjw3xDBOYEuU/GaaWbfo+czUpihGB5JIM25SOMSAo+nXuRzyZC60", 
  authDomain: "gbc-navigation-app.firebaseapp.com",
  databaseURL: "https://gbc-navigation-app.firebaseio.com",
  projectId: "gbc-navigation-app",
  storageBucket: "gbc-navigation-app.appspot.com",
  messagingSenderId: "CUZ5H5abYJcmCxt5Uvblzg==",  
  appId: "CEsNWGq9qLOcOy0OchMOJUP/A2QE0WU8NvoQpqPxmL65hGjio3OtFsiOFBDvHpyx" 
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
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
