import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MangaService } from '../../service/manga.service';
import { Manga } from '../manga';

@Component({
  selector: 'app-manga-detalles',
  standalone: true,
  imports: [],
  templateUrl: './manga-detalles.component.html',
  styleUrl: './manga-detalles.component.css'
})
export class MangaDetallesComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  mangaService = inject(MangaService);
  manga: Manga | undefined;

  constructor(){
    const mangaId = this.route.snapshot.params['id'];
    this.manga = this.mangaService.getMangaById(mangaId);
  }  
}
