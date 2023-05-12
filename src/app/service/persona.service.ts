import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { persona } from '../modelo/persona.modelo';
import { Observable } from 'rxjs';
import { environment } from '../environment/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  URL:string =environment.ApiUrl + "personas/";

  constructor(private http: HttpClient) { }

  public getPersona(): Observable<persona>{
    return this.http.get<persona>(this.URL+ 'traer');
  }
}