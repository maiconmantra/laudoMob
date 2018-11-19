import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, MenuController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { PrincipalPage } from '../principal/principal';
import { ActiveUser } from '../../app/models/model/activeuser';
import { SessionProvider } from '../../providers/session/session';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  activeuser: ActiveUser;
  loading: any;
  loginData = { username:'', password:'' };
  
  private _data: any;
  
  public get data(): any {
    return this._data;
  }
  public set data(value: any) {
    this._data = value;
  }

  constructor( public navCtrl: NavController
             , public navParams: NavParams
             , public authService: AuthServiceProvider
             , public loadingCtrl: LoadingController
             , public menu: MenuController
             , private toastCtrl: ToastController
             , private session: SessionProvider
             ) {
  }

  ionViewDidLoad() {
    this.session.remove();        
    this.menu.enable(false, 'menu-filter-laudos');
    this.menu.enable(false, 'menu-filter-graficos');  
  }

  login() {
    this.showLoader();
    this.authService.login(this.loginData).then((result) => {
      this.loading.dismiss();      
      this.data = result;      
      if (result['auth'] == true) {     
        this.session.create(result['usuario']);
        this.navCtrl.setRoot(PrincipalPage);
      }else{        
        this.presentToast(result['msg']);
      }
    }, (err) => {      
      this.loading.dismiss();
      this.presentToast(err);
    });
  }

  showLoader(){
    this.loading = this.loadingCtrl.create({
        content: 'Autenticando...'
    });
    this.loading.present();
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 4000,
      position: 'bottom',
      dismissOnPageChange: true
    });

    toast.onDidDismiss(() => {      
    });

    toast.present();
  }
 

}
