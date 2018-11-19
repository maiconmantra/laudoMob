import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { SessionProvider } from '../../providers/session/session';
import { ActiveUser } from '../../app/models/model/activeuser';

let apiUrl = 'http://testoil.ind.br/rest/';
let url    = '';

@Injectable()
export class ClientesProvider {

  constructor(public http: Http, public session: SessionProvider) {
    console.log('Hello ClientesProvider Provider');
  }

  getAll() {    
    return this.session.get().then(res => {      
      let user = new ActiveUser(res);      
      if (user.id != null) {       
        return new Promise((resolve, reject) => {
          if (user.id_tipo_usuario != 2 && user.clientes != "") {
            url = apiUrl+'clientes/usuario/'+ user.id;
          }else{
            url = apiUrl+'clientes';
          }
          this.http.get(url)
            .subscribe((result: any) => {
              resolve(result.json());
            },
            (error) => {
              reject(error.json());
            });
        }).catch(error => {
          console.log(error);
        });
      }
    }).catch(error => {
      console.log(error);
    });;
  }

}
