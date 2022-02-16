import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Criptomoneda } from '../interfaces/criptomoneda.interface';

@Injectable({
  providedIn: 'root'
})
export class CriptomonedaService {


  private apiUrl: string = 'https://api.nomics.com/v1/currencies/ticker?key=e7c6cb06fd3014abd445cbb51b104d75e440f63d';
  public historial: string[] = [];
  get httpParams() {
    //indicamos los parámetros que queremos que nos devuelva la petición
    //depende de como funcione la API
    return new HttpParams().set('fields',
      'name,currency,status,logo_url,price,id,rank');
  }


  constructor(private http: HttpClient) { }


  buscarCriptomoneda(termino: string): Observable<Criptomoneda[]> {
    const url = `${this.apiUrl}&ids=${termino}`;
   let  array= termino.split(',');
    console.log(array)
    for (let i = 0; i < array.length; i++) {
      this.guardarHistorial(array[i]);
    }
    
    return this.http.get<Criptomoneda[]>(url, { params: this.httpParams });
  }

  private guardarHistorial(termino: string): void {
    termino = termino.trim().toLocaleLowerCase();
    if (!this.historial.includes(termino)) {
      this.historial.unshift(termino);
      this.historial = this.historial.splice(0, 10);
      localStorage.setItem("historial", JSON.stringify(this.historial));
    }

  }


  getCriptomonedaPorAlpha(id: string): Observable<Criptomoneda[]> {

    const url = `${this.apiUrl}&ids=${id}`;
    return this.http.get<Criptomoneda[]>(url, { params: this.httpParams });
  }

  buscarCriptomonedaRango(): Observable<Criptomoneda[]> {

    const url = `${this.apiUrl}&sort=rank&per-page=10`;
    return this.http.get<Criptomoneda[]>(url, { params: this.httpParams });
  }

}
