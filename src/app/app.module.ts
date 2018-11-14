import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';

import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { PrincipalPage } from '../pages/principal/principal';
import { LaudosProvider } from '../providers/laudos/laudos';
import { ClientesProvider } from '../providers/clientes/clientes';
import { StatusProvider } from '../providers/status/status';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    PrincipalPage    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    PrincipalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,        
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider,
    LaudosProvider,
    ClientesProvider,
    StatusProvider
  ]
})
export class AppModule {}
