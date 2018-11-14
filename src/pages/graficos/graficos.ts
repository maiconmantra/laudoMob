import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController  } from 'ionic-angular';

/**
 * Generated class for the GraficosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-graficos',
  templateUrl: 'graficos.html',
})
export class GraficosPage {  
  
  activeMenu: string;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController ) {
    this.menuGrafico();
  }

  menuLaudo() {
    this.activeMenu = 'menu-filter-laudos';
    this.menu.enable(true, 'menu-filter-laudos');
    this.menu.enable(false, 'menu-filter-graficos');
  }
  menuGrafico() {
    this.activeMenu = 'menu-filter-graficos';    
    this.menu.enable(false, 'menu-filter-laudos');
    this.menu.enable(true, 'menu-filter-graficos');    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GraficosPage');
  }

}
