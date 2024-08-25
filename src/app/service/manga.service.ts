import { Injectable } from '@angular/core';
import { Manga } from '../directory/manga';

@Injectable({
  providedIn: 'root'
})
export class MangaService {
  url = 'http://localhost:3000/api';
  constructor() { }

  async getAllMangasApi(parm: number = 0o0): Promise<Manga[]> {
    try {
      const response = await fetch(`${this.url}/manga/top/${parm}`);
      const data = await response.json();
      return data ?? []; 
    } catch (error) {
      console.error('Error fetching data:', error);
      return []; 
    }
  }

  async getMangaById(id: number): Promise<Manga | undefined>{
    const data = await fetch(`${this.url}/manga/${id}`);
    return (await data.json() ?? {});
  } 

  async getMangasByTitle(title: string): Promise<Manga[]> {
    try {
      const response = await fetch(`${this.url}/manga/search/${title}`);
      const data = await response.json();
      return data ?? []; 
    } catch (error) {
      console.error(error);
      return [];
    }
  }
  
}
