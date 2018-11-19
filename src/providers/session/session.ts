import { Storage } from "@ionic/storage";
import { Injectable } from '@angular/core';
import { ActiveUser } from '../../app/models/model/activeuser';

/*
  Generated class for the SessionProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SessionProvider {

  constructor(public storage: Storage) {
    console.log('Hello SessionProvider Provider');
  }

  // setando uma seção e passando o tipo de usuário
  create(activeuser: ActiveUser) {
    this.storage.set('activeuser', activeuser);
  }

  get(): Promise<any> {
    return this.storage.get('activeuser');
  }

  // Quando deslogar deve remova do storage
  remove() {
    this.storage.remove('activeuser');
  }

  exist() {
    this.get().then(res => {  
      if(res) {
          console.log('resultado IF');
          return true;
      } else {
          console.log('resultado else');
          return false;
      }
    });
  }

}
