import { Component, Input } from '@angular/core';
import { Manga } from '../manga';

@Component({
  selector: 'app-directory',
  standalone: true,
  imports: [],
  templateUrl: './directory.component.html',
  styleUrl: './directory.component.css'
})
export class DirectoryComponent {
  @Input() manga!: Manga;
  

}
