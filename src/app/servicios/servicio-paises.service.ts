import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioPaisesService {

  //https://restcountries.eu/
  //https://restcountries.eu/rest/v2/name/Argentina
  //https://restcountries.eu/rest/v2/all

  private paisActual : string;

  constructor(private http : HttpClient) { 
    this.paisActual = "Argentina";
  }

  public getPaisActual(pais : string){
    return this.http.get('https://restcountries.eu/rest/v2/'.concat(pais));
  }

  public setPaisActual(pais : string){
    this.paisActual = pais;
  }

  public getAllPaises():any{
    return this.http.get('https://restcountries.eu/rest/v2/all');
  }

}
