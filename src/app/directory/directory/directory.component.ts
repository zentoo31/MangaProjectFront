import { Component, inject, Input } from '@angular/core';
import { MangaComponent } from "../manga/manga.component";
import { Manga } from '../manga';
import { MangaService } from '../../service/manga.service';
import { RouterLink } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-directory',
  standalone: true,
  imports: [MangaComponent, RouterLink],
  templateUrl: './directory.component.html',
  styleUrl: './directory.component.css',
  animations: [
    trigger('fadeAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('500ms', style({ opacity: 0 }))
      ])
    ])
  ]
})

export class DirectoryComponent {  
  mangaList: Manga[] = [];
  mangaService: MangaService = inject(MangaService);
  counterPagination: number = 0o0;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.counterPagination = +params['counterPagination'] || 0;

      this.mangaService.getAllMangasApi(this.counterPagination).then((manga: Manga[]) => {
        this.mangaList = manga;
        this.updatePagination();
      });
    });  
    globalThis.document.title = "MangaIn: Directorio";
  }
  
  updatePagination() {
    if (this.mangaList.length > 3 && this.mangaList[3].paging.previus == null) {
      const pageItem = document.querySelector('.page-item.enabled');
      if (pageItem) {
        pageItem.classList.replace('enabled', 'disabled');
      }
    }else{
      const pageItem = document.querySelector('.page-item.disabled');
      if (pageItem) {
        pageItem.classList.replace('disabled', 'enabled');
      }
    }
  }
  
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
