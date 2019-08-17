import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TipsService {

  constructor(
    public http: HttpClient
  ) { }


  obtenerTip() {
    let cantTips = 18;
    let idTip = Math.floor(Math.random() * cantTips) + 1;
    return this.http.get("http://todaviasirve.azurewebsites.net/Api/Tips/" + idTip)
    /* return this.http.get("http://localhost:55081/Api/Tips/" + idTip) */
  }



}
