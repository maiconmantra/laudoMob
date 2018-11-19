import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the PrincipalPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html'
})
export class PrincipalPage {

  laudoRoot = 'LaudoPage'
  graficosRoot = 'GraficosPage'
  configuracoesRoot = 'ConfiguracoesPage'

  

  constructor(public navCtrl: NavController) {
    
  }

}
