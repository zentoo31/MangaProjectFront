import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { User } from '../user-info/user';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {
  private httpClient = inject(HttpClient);
  private baseUrl = "http://localhost:3000/api/user";
  constructor() { }

  async getInfoUser(): Promise<User | undefined>{
      const response = await fetch(`${this.baseUrl}/user-info`,{
        method: 'GET',
        credentials: 'include'
      });
      return (await response.json() ?? {});
  }

} 
