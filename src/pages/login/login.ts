import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { HomePage } from '../../pages/home/home';

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

  loading: any;
  loginData = { username:'', password:'' };
  data: any;

  constructor( public navCtrl: NavController
             , public navParams: NavParams
             , public authService: AuthServiceProvider
             , public loadingCtrl: LoadingController
             , private toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login() {
    this.showLoader();
    this.authService.login(this.loginData).then((result) => {
      this.loading.dismiss();      
      this.data = result;      
      if (result['auth'] == true) {
        console.log('ok');
        this.navCtrl.setRoot(HomePage);
      }else{
        console.log('nok');
        this.presentToast(result['msg']);
      }
    }, (err) => {
      console.log('nok2');
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
