import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiPaisesService {

  public countriesUrlEurope = 'https://restcountries.eu/rest/v2/region/europe';

  constructor(private http: HttpClient) { }

  public obtenerListadoParametro(url){
    return this.http.get(url);
  }

  
}
