import { Component, ElementRef, ViewChild } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { CommonModule } from '@angular/common';
import { MusicsService } from '../../services/musics.service';

@Component({
  selector: 'app-main',
  imports: [CardComponent, CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  musicas: Musicas;
  @ViewChild('carousel', { static: false }) carousel!: ElementRef;

  constructor(private musicsService: MusicsService){
    this.musicas = new Musicas(this.musicsService);
  }

  musics = [{}]

  scrollLeft() {
    this.carousel.nativeElement.scrollBy({
      left: -300,
      behavior: 'smooth'
    });
  }

  scrollRight() {
    this.carousel.nativeElement.scrollBy({
      left: 300,
      behavior: 'smooth'
    });
  }

  ngOnInit(){
    this.musicas.enviarMusicas();
    this.musics = this.musicsService.musics;
  }
}

export class Musicas {
  constructor(public musicsService: MusicsService){}

  enviarMusicas(){

    let musics = [
    {nome: "teste", cantor: "teste"},
    {nome: "teste", cantor: "teste"},
    {nome: "teste", cantor: "teste"},
    {nome: "teste", cantor: "teste"},
    {nome: "teste", cantor: "teste"},
    {nome: "teste", cantor: "teste"},
    {nome: "teste", cantor: "teste"},
    {nome: "teste", cantor: "teste"},
    {nome: "teste", cantor: "teste"},
    {nome: "teste", cantor: "teste"},
    {nome: "teste", cantor: "teste"},
    {nome: "teste", cantor: "teste"},
    {nome: "teste", cantor: "teste"},
    {nome: "teste", cantor: "teste"},
    {nome: "teste", cantor: "teste"},
    {nome: "teste", cantor: "teste"},
  ]

  this.musicsService.musics = musics;
  }
}
