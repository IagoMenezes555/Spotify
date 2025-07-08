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
    {nome: "teste1", cantor: "teste1"},
    {nome: "teste2", cantor: "teste2"},
    {nome: "teste3", cantor: "teste3"},
    {nome: "teste4", cantor: "teste4"},
    {nome: "teste5", cantor: "teste5"},
    {nome: "teste6", cantor: "teste6"},
    {nome: "teste7", cantor: "teste7"},
    {nome: "teste8", cantor: "teste8"},
    {nome: "teste9", cantor: "teste9"},
    {nome: "teste10", cantor: "teste10"},
    {nome: "teste11", cantor: "teste11"},
    {nome: "teste12", cantor: "teste12"},
    {nome: "teste13", cantor: "teste13"},
    {nome: "teste14", cantor: "teste14"},
    {nome: "teste15", cantor: "teste15"},
    {nome: "teste16", cantor: "teste16"},
  ]

  this.musicsService.musics = musics;
  }
}
