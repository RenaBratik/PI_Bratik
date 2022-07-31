import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  URL = 'http://localhost:8080/persona/';

  constructor(private httpClient : HttpClient) { }
  public lista(): Observable<persona>{
    return this.httpClient.get<persona>(this.URL + 'personas/traer');
  }

  public detail(): Observable<persona>{
    return this.httpClient.get<persona>(this.URL + 'personas/traer/perfil');
  }

  public save(persona: persona): Observable<any>{
    return this.httpClient.post<persona>(this.URL + 'personas/crear', persona);
  }

  public update(id: number, educacion: persona): Observable<any>{
    return this.httpClient.put<any>(this.URL +  `personas/editar/${id}`, persona);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `personas/borrar/${id}`);
  }



 
}
