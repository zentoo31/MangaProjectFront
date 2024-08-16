import { Component, inject, Input } from '@angular/core';
import { MangaComponent } from "../manga/manga.component";
import { Manga } from '../manga';
import { MangaService } from '../../service/manga.service';

MangaService
@Component({
  selector: 'app-directory',
  standalone: true,
  imports: [MangaComponent],
  templateUrl: './directory.component.html',
  styleUrl: './directory.component.css'
})

export class DirectoryComponent {  
  mangaList: Manga[] = [];
  mangaService: MangaService = inject(MangaService);

  constructor(){
    this.mangaList = this.mangaService.getAllMangas();
  }
}
