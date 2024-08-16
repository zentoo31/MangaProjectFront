import { Component, Input } from '@angular/core';
import { Manga } from '../manga';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-manga',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './manga.component.html',
  styleUrl: './manga.component.css'
})
export class MangaComponent {
  @Input() manga!: Manga;

}
