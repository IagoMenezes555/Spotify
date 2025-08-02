import { Component } from '@angular/core';
import { MusicsService } from '../../services/musics.service';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  constructor(private musicsService: MusicsService) {}
  results = [{ nome: '', cantor: '' }];

  ngOnInit() {
    this.musicsService.getData().subscribe((o) => {
      this.results = o;
      console.log(this.results);
    });
  }
}
