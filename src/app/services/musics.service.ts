import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface M{
  nome: string,
  cantor: string
}

@Injectable({
  providedIn: 'root'
})
export class MusicsService {
  constructor(private http: HttpClient){}

  getData(): Observable<M[]> {
    return this.http.get<M[]>("http://localhost:3000/Musicas");
  }
}
