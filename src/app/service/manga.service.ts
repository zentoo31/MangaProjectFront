import { Injectable } from '@angular/core';
import { Manga } from '../directory/manga';

@Injectable({
  providedIn: 'root'
})
export class MangaService {
  constructor() { }

  protected mangaList: Manga[] = [
    {
      id: '66b41bc937123c82bf8c62e8',
      nombre: 'One Piece',
      autor: 'Eiichiro Oda',
      portada: 'https://cdn.myanimelist.net/images/manga/2/253146.jpg',
      categorias: ['aventura','acción','fantasía'],
      descripcion: 'Un joven pirata llamado Monkey D. Luffy se embarca en una aventura para encontrar el tesoro One Piece y convertirse en el Rey de los Piratas.',
      estado: 'En emisión',
      fecha_fin: 'null',
      fecha_ini: '1997-07-22'
    },{
      id: '66b41bc937123c82bf8c62e8',
      nombre: 'One Piece',
      autor: 'Eiichiro Oda',
      portada: 'https://cdn.myanimelist.net/images/manga/2/253146.jpg',
      categorias: ['aventura','acción','fantasía'],
      descripcion: 'Un joven pirata llamado Monkey D. Luffy se embarca en una aventura para encontrar el tesoro One Piece y convertirse en el Rey de los Piratas.',
      estado: 'En emisión',
      fecha_fin: 'null',
      fecha_ini: '1997-07-22'
    },{
      id: '66b41bc937123c82bf8c62e8',
      nombre: 'One Piece',
      autor: 'Eiichiro Oda',
      portada: 'https://cdn.myanimelist.net/images/manga/2/253146.jpg',
      categorias: ['aventura','acción','fantasía'],
      descripcion: 'Un joven pirata llamado Monkey D. Luffy se embarca en una aventura para encontrar el tesoro One Piece y convertirse en el Rey de los Piratas.',
      estado: 'En emisión',
      fecha_fin: 'null',
      fecha_ini: '1997-07-22'
    },{
      id: '66b41bc937123c82bf8c62e8',
      nombre: 'One Piece',
      autor: 'Eiichiro Oda',
      portada: 'https://cdn.myanimelist.net/images/manga/2/253146.jpg',
      categorias: ['aventura','acción','fantasía'],
      descripcion: 'Un joven pirata llamado Monkey D. Luffy se embarca en una aventura para encontrar el tesoro One Piece y convertirse en el Rey de los Piratas.',
      estado: 'En emisión',
      fecha_fin: 'null',
      fecha_ini: '1997-07-22'
    },{
      id: '66b41bc937123c82bf8c62e8',
      nombre: 'One Piece',
      autor: 'Eiichiro Oda',
      portada: 'https://cdn.myanimelist.net/images/manga/2/253146.jpg',
      categorias: ['aventura','acción','fantasía'],
      descripcion: 'Un joven pirata llamado Monkey D. Luffy se embarca en una aventura para encontrar el tesoro One Piece y convertirse en el Rey de los Piratas.',
      estado: 'En emisión',
      fecha_fin: 'null',
      fecha_ini: '1997-07-22'
    },{
      id: '66b41bc937123c82bf8c62e8',
      nombre: 'One Piece',
      autor: 'Eiichiro Oda',
      portada: 'https://cdn.myanimelist.net/images/manga/2/253146.jpg',
      categorias: ['aventura','acción','fantasía'],
      descripcion: 'Un joven pirata llamado Monkey D. Luffy se embarca en una aventura para encontrar el tesoro One Piece y convertirse en el Rey de los Piratas.',
      estado: 'En emisión',
      fecha_fin: 'null',
      fecha_ini: '1997-07-22'
    },
  ]

  getAllMangas(): Manga[]{
    return this.mangaList;
  }

  getMangaById(id: string): Manga | undefined {
    return this.mangaList.find((manga) => manga.id === id);
  }
}
