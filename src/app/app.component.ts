import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
import { PrincipalPage } from '../pages/principal/principal';
import { ClientesProvider } from '../providers/clientes/clientes';
import { StatusProvider } from '../providers/status/status';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  
  searchTerm: any;  
  
  selStatus: Array<string>;
  statusAlertOpts: any;
  status:any   = [];

  selClientes: Array<string>;
  clientesAlertOpts: any;
  clientes:any = [];
  

  rootPage:any = PrincipalPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, clientesProvider: ClientesProvider, statusProvider: StatusProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      this.clientesAlertOpts = {
        title: 'Clientes',
        subTitle: 'Selecione itens desejados'
      };

      this.statusAlertOpts = {
        title: 'Status',
        subTitle: 'Selecione itens desejados'
      };

      clientesProvider.getAll().then( data => {
        this.clientes = data;
      });

      statusProvider.getAll().then( data => {
        this.status = data;
      });

    });
  }

  onInput(event: any) {    
    console.log(event);
  }

  onCancel(event: any) {
    console.log(event);
  }

}

