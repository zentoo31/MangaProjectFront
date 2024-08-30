import { inject, Injectable } from '@angular/core';
import { catchError, firstValueFrom, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private baseUrl = "http://localhost:3000/api/user";
  private httpClient = inject(HttpClient);
  constructor() { }

  async register(formValue: any) {
    try {
      return await firstValueFrom(
        this.httpClient.post<any>(`${this.baseUrl}/register`, formValue).pipe(
          catchError((error) => this.handleError(error)) 
        )
      );
    } catch (error) {
      throw error; 
    }
  }

  async login(formValue: any){
    try {
      return await firstValueFrom(
        this.httpClient.post<any>(`${this.baseUrl}/login`, formValue).pipe(
          catchError((error)=> this.handleError(error))
        )
      );
    } catch (error) {
      throw error;
    }
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Ha ocurrido un error inesperado';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      if (error.error && error.error.message) {
        errorMessage = error.error.message;
      } else {
        errorMessage = 'Error desconocido en el servidor';
      }
    }
    return throwError(() => new Error(errorMessage));
  }
}
