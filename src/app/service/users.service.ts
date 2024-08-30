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
          catchError((error) => this.handleError(error)) // Asegúrate de pasar el error aquí
        )
      );
    } catch (error) {
      throw error; // Propaga el error para manejarlo donde se llame esta función
    }
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Ha ocurrido un error inesperado';

    if (error.error instanceof ErrorEvent) {
      // Error del cliente o de la red
      // console.error('An error occurred:', error.error.message);
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // console.error(
      //   `Backend returned code ${error.status}, ` +
      //   `body was: ${JSON.stringify(error.error)}`
      // );

      if (error.error && error.error.message) {
        errorMessage = error.error.message; // Utiliza el mensaje de error del backend
      } else {
        errorMessage = 'Error desconocido en el servidor';
      }
    }

    // Retorna el mensaje de error para que se propague
    return throwError(() => new Error(errorMessage));
  }
}
