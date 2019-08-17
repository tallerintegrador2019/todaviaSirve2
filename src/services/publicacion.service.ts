import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PublicacionService {

  constructor(
    public http: HttpClient
  ) {

  }


  // TRAE TODAS LAS PUBLICACIONES
  obtenerTodasPublicaciones() {
    return this.http.get("https://todaviasirve.azurewebsites.net/api/Publicacion")
    /* return this.http.get("http://localhost:55081/Api/Publicacion") */
  }

  // TRAE UNA PUBLICACION POR ID
  obtenerPublicacion(id) {
    return this.http.get("https://todaviasirve.azurewebsites.net/api/Publicacion/" + id)
  }

  // BUSCADOR DE PUBLICACIONES
  buscarPublicacion(titulo: string) {
    return this.http.get("https://todaviasirve.azurewebsites.net/api/Publicacion/Buscar/" + titulo)
    /* return this.http.get("http://localhost:55081/api/Publicacion/Buscar/" + titulo) */
  }




}
