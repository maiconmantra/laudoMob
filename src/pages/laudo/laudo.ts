import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { LaudosProvider } from '../../providers/laudos/laudos';

/**
 * Generated class for the LaudoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-laudo',
  templateUrl: 'laudo.html',
})
export class LaudoPage {
  activeMenu: string;
    
  items: any = [];
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController, public laudoProvider: LaudosProvider) {
    this.menuLaudo();  
    
    this.laudoProvider.getAll(664).then( data => {
      this.items = data;
    });
    
  }

  menuLaudo() {
    this.activeMenu = 'menu-filter-laudos';
    this.menu.enable(false, 'menu-filter-graficos');
    this.menu.enable(true, 'menu-filter-laudos');    
  }

  menuGrafico() {
    this.activeMenu = 'menu-filter-graficos';    
    this.menu.enable(false, 'menu-filter-laudos');
    this.menu.enable(true, 'menu-filter-graficos');    
  }

  expandItem(item){ 
    this.items.map((listItem) => {
        if(item == listItem){
            listItem.expanded = !listItem.expanded;
        } else {
            listItem.expanded = false;
        }
        return listItem;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LaudoPage');
  }

}
