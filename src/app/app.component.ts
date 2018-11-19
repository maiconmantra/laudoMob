import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { ClientesProvider } from '../providers/clientes/clientes';
import { StatusProvider } from '../providers/status/status';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  //-- Termo de Pesquisa
  private _searchTerm: any;  
  public get searchTerm(): any {
    return this._searchTerm;
  }
  public set searchTerm(value: any) {
    this._searchTerm = value;
  }
  
  //-- definicão do combo status
  private _statusAlertOpts: any;
  public get statusAlertOpts(): any {
    return this._statusAlertOpts;
  }
  public set statusAlertOpts(value: any) {
    this._statusAlertOpts = value;
  }
  private _selStatus: Array<string>;  
  public get selStatus(): Array<string> {
    return this._selStatus;
  }
  public set selStatus(value: Array<string>) {
    this._selStatus = value;
  }
  private _status: any = [];
  public get status(): any {
    return this._status;
  }
  public set status(value: any) {
    this._status = value;
  }

  //-- Definicao do combo de clientes
  private _clientesAlertOpts: any;
  public get clientesAlertOpts(): any {
    return this._clientesAlertOpts;
  }
  public set clientesAlertOpts(value: any) {
    this._clientesAlertOpts = value;
  }
  private _selClientes: Array<string>;
  public get selClientes(): Array<string> {
    return this._selClientes;
  }
  public set selClientes(value: Array<string>) {
    this._selClientes = value;
  }  
  private _clientes: any = [];
  public get clientes(): any {
    return this._clientes;
  }
  public set clientes(value: any) {
    this._clientes = value;
  }
    
  rootPage:any = LoginPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public clientesProvider: ClientesProvider, public statusProvider: StatusProvider) {
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
    });
  }

  menuClosed() {
    console.log("menu closed");
  }

  menuOpened() {
    console.log("menu open");
    this.statusProvider.getAll().then( data => {
      this.status = data;
    });
    this.clientesProvider.getAll().then( data => {
      this.clientes = data;
    });

  }


}

