import { Component, ElementRef, ViewChild } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { CommonModule } from '@angular/common';
import { MusicsService } from '../../services/musics.service';

@Component({
  selector: 'app-main',
  imports: [CardComponent, CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {
  @ViewChild('carousel', { static: false }) carousel!: ElementRef;

  constructor(private musicsService: MusicsService) {}

  scrollLeft() {
    this.carousel.nativeElement.scrollBy({
      left: -300,
      behavior: 'smooth',
    });
  }

  scrollRight() {
    this.carousel.nativeElement.scrollBy({
      left: 300,
      behavior: 'smooth',
    });
  }

  musics = [{}];

  ngOnInit() {
    this.musicsService.getData().subscribe(data => this.musics = data)
  }
}
