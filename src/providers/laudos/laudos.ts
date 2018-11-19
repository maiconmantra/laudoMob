import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

let apiUrl = 'http://testoil.ind.br/rest/';

@Injectable()
export class LaudosProvider {

  constructor(public http: Http) {
    console.log('Hello LaudosProvider Provider');
  }

  getAll(id: any) {
    return new Promise((resolve, reject) => {
      this.http.get(apiUrl+'laudos/usuario/'+ id)
        .subscribe((result: any) => {
          resolve(result.json());
        },
        (error) => {
          reject(error.json());
        });
    });
  }  

}
