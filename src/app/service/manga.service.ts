import { Injectable } from '@angular/core';
import { Manga } from '../directory/manga';
@Injectable({
  providedIn: 'root'
})
export class MangaService {
  url = 'http://localhost:3000/api';
  constructor() { }

  // protected mangaList: Manga[] = [
  //   {
  //     id: '1',
  //     nombre: 'One Piece',
  //     autor: 'Eiichiro Oda',
  //     portada: 'https://cdn.myanimelist.net/images/manga/2/253146.jpg',
  //     categorias: ['aventura','acción','fantasía'],
  //     descripcion: 'Un joven pirata llamado Monkey D. Luffy se embarca en una aventura para encontrar el tesoro One Piece y convertirse en el Rey de los Piratas.',
  //     estado: 'En emisión',
  //     fecha_fin: 'null',
  //     fecha_ini: '1997-07-22'
  //   },{
  //     id: '2',
  //     nombre: 'Steins;Gate',
  //     autor: 'Eiichiro Oda',
  //     portada: 'https://cdn.myanimelist.net/images/anime/1935/127974.jpg',
  //     categorias: ['aventura','acción','fantasía'],
  //     descripcion: 'Un joven pirata llamado Monkey D. Luffy se embarca en una aventura para encontrar el tesoro One Piece y convertirse en el Rey de los Piratas.',
  //     estado: 'En emisión',
  //     fecha_fin: 'null',
  //     fecha_ini: '1997-07-22'
  //   },{
  //     id: '66b41bc937123c82bf8c62e8',
  //     nombre: 'Vagabond',
  //     autor: 'Eiichiro Oda',
  //     portada: 'https://cdn.myanimelist.net/images/manga/1/259070.jpg',
  //     categorias: ['aventura','acción','fantasía'],
  //     descripcion: 'Un joven pirata llamado Monkey D. Luffy se embarca en una aventura para encontrar el tesoro One Piece y convertirse en el Rey de los Piratas.',
  //     estado: 'En emisión',
  //     fecha_fin: 'null',
  //     fecha_ini: '1997-07-22'
  //   },{
  //     id: '3',
  //     nombre: 'One Piece',
  //     autor: 'Vinland Saga',
  //     portada: 'https://cdn.myanimelist.net/images/manga/2/188925.jpg',
  //     categorias: ['aventura','acción','fantasía'],
  //     descripcion: 'Un joven pirata llamado Monkey D. Luffy se embarca en una aventura para encontrar el tesoro One Piece y convertirse en el Rey de los Piratas.',
  //     estado: 'En emisión',
  //     fecha_fin: 'null',
  //     fecha_ini: '1997-07-22'
  //   },{
  //     id: '4',
  //     nombre: 'One Piece',
  //     autor: '86',
  //     portada: 'https://cdn.myanimelist.net/images/manga/3/194315.jpg',
  //     categorias: ['aventura','acción','fantasía'],
  //     descripcion: 'Un joven pirata llamado Monkey D. Luffy se embarca en una aventura para encontrar el tesoro One Piece y convertirse en el Rey de los Piratas.',
  //     estado: 'En emisión',
  //     fecha_fin: 'null',
  //     fecha_ini: '1997-07-22'
  //   },{
  //     id: '5',
  //     nombre: 'Monster',
  //     autor: 'Eiichiro Oda',
  //     portada: 'https://cdn.myanimelist.net/images/manga/3/258224.jpg',
  //     categorias: ['aventura','acción','fantasía'],
  //     descripcion: 'Un joven pirata llamado Monkey D. Luffy se embarca en una aventura para encontrar el tesoro One Piece y convertirse en el Rey de los Piratas.',
  //     estado: 'En emisión',
  //     fecha_fin: 'null',
  //     fecha_ini: '1997-07-22'
  //   },
  // ]

  async getAllMangasApi(): Promise<Manga[]> {
    try {
      const response = await fetch(`${this.url}/manga/top`);
      const data = await response.json();
      return data ?? []; 
    } catch (error) {
      console.error('Error fetching data:', error);
      return []; 
    }
  }

  async getMangaById(id: number): Promise<Manga | undefined>{
    const data = await fetch(`${this.url}/anime/${id}`);
    return (await data.json() ?? {});
  } 


}
