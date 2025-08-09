import { Component, ElementRef, ViewChild } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { CommonModule } from '@angular/common';
import { MusicsService } from '../../services/musics.service';
import { CircleComponent } from '../circle/circle.component';

@Component({
  selector: 'app-main',
  imports: [CardComponent, CommonModule, CircleComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {
  @ViewChild('carousel', { static: false }) carousel!: ElementRef;
  @ViewChild('carousel2', { static: false}) carousel2!: ElementRef;

  constructor(private musicsService: MusicsService) {}

  scrollLeft1() {
    this.carousel.nativeElement.scrollBy({
      left: -300,
      behavior: 'smooth',
    });
  }

  scrollRight1() {
    this.carousel.nativeElement.scrollBy({
      left: 300,
      behavior: 'smooth',
    });
  }

    scrollLeft2() {
    this.carousel2.nativeElement.scrollBy({
      left: -300,
      behavior: 'smooth',
    });
  }

  scrollRight2() {
    this.carousel2.nativeElement.scrollBy({
      left: 300,
      behavior: 'smooth',
    });
  }

  musics = [{}];

  ngOnInit() {
    this.musicsService.getMusic().subscribe(data => this.musics = data)
  }
}
