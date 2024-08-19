import { Injectable } from '@angular/core';
import { Manga } from '../directory/manga';
@Injectable({
  providedIn: 'root'
})
export class MangaService {
  url = 'http://localhost:3000/api';
  constructor() { }

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
