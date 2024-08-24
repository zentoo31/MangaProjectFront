import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MangaService } from '../../service/manga.service';
import { Manga } from '../manga';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-manga-detalles',
  standalone: true,
  imports: [MatChipsModule, MatIconModule, MatButtonModule],
  templateUrl: './manga-detalles.component.html',
  styleUrl: './manga-detalles.component.css'
})
export class MangaDetallesComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  mangaService = inject(MangaService);
  manga: Manga | undefined;

  constructor(){
    const mangaId = parseInt(this.route.snapshot.params['id'], 10);
    this.mangaService.getMangaById(mangaId).then((manga => {
      this.manga = manga;
    }));
  }
  
  

}
