import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

let apiUrl = 'http://testoil.ind.br/rest/';

@Injectable()
export class ClientesProvider {

  constructor(public http: Http) {
    console.log('Hello ClientesProvider Provider');
  }

  getAll() {
    return new Promise((resolve, reject) => {
      this.http.get(apiUrl+'clientes')
        .subscribe((result: any) => {
          resolve(result.json());
        },
        (error) => {
          reject(error.json());
        });
    });
  }

}
