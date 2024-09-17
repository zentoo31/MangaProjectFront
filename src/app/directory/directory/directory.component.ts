import { Component, Inject, inject } from '@angular/core';
import { MangaComponent } from "../manga/manga.component";
import { Manga } from '../manga';
import { MangaService } from '../../service/manga.service';
import { RouterLink } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';
import { SpinnerComponent } from '../../util/spinner/spinner.component';
@Component({
  selector: 'app-directory',
  standalone: true,
  imports: [MangaComponent, RouterLink, SpinnerComponent],
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
  mangaService = inject(MangaService);
  counterPagination: number = 0;
  titleSearch: string = "";
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.titleSearch = params['title'] || ''; // Obtiene el parámetro 'title'
      this.counterPagination = +params['counterPagination'] || 0;
      this.loadData();
    });
    
    document.title = "MangaIn: Directorio";
  }

  loadData() {
    if (this.titleSearch) {
      // Buscar mangas por título
      this.mangaService.getMangasByTitle(this.titleSearch).then(manga => {
        this.mangaList = manga;
        this.updatePagination();
      }).catch(error => {
        console.error('Error fetching mangas by title:', error);
      });
    } else {
      // Obtener todos los mangas
      this.mangaService.getAllMangasApi(this.counterPagination).then(manga => {
        this.mangaList = manga;
        this.updatePagination();
      }).catch(error => {
        console.error('Error fetching all mangas:', error);
      });
    }
  }

  updatePagination() {
    if (this.mangaList.length > 3 && this.mangaList[3].paging.previus == null) {
      const pageItem = globalThis?.document?.querySelector('.page-item.enabled');
      if (pageItem) {
        pageItem.classList.replace('enabled', 'disabled');
      }
    } else {
      const pageItem = globalThis?.document?.querySelector('.page-item.disabled');
      if (pageItem) {
        pageItem.classList.replace('disabled', 'enabled');
      }
    }
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
