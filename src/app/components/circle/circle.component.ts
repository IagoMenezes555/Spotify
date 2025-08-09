import { Component } from '@angular/core';
import { MusicsService } from '../../services/musics.service';

@Component({
  selector: 'app-circle',
  imports: [],
  templateUrl: './circle.component.html',
  styleUrl: './circle.component.scss',
})
export class CircleComponent {
  constructor(private musicsService: MusicsService) {}
  results = [{ nome: '', tipo: '', imagem: '' }];

  ngOnInit() {
    this.musicsService.getArtist().subscribe((o) => {
      this.results = o;
    });
  }
}
