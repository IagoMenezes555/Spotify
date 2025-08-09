import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface M{
  nome: string,
  cantor: string,
  imagem: string
}

export interface A{
  nome: string,
  tipo: string,
  imagem: string
}

@Injectable({
  providedIn: 'root'
})
export class MusicsService {
  constructor(private http: HttpClient){}

  getMusic(): Observable<M[]> {
    return this.http.get<M[]>("http://localhost:3000/Musicas");
  }

  getArtist(): Observable<A[]> {
    return this.http.get<A[]>("http://localhost:3000/Artistas")
  }
}