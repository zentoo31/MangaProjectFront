import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = "http://localhost:3000/api/token";

  constructor(private http: HttpClient) { }

  isAuth(): Observable<boolean>{
    const res = this.http.get<boolean>(`${this.baseUrl}/verify-token`,  {withCredentials: true});
    return res;
  }

  checkAuth(): Observable<boolean> {
    return this.isAuth().pipe(
      map(isAuthenticated => isAuthenticated), // Solo retorna el valor booleano
      catchError(() => of(false)) // En caso de error, retorna false
    );
  }
}
