import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { inject } from '@angular/core';
import { catchError, map, of } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  return authService.isAuth().pipe(
    map(isAuthenticated => {
      if (isAuthenticated) {
        return true;
      } else {
        router.navigate(['/login']); // Redirige a la ruta deseada en caso de no autenticado
        return false;
      }
    }),
    catchError(() => {
      router.navigate(['/login']); // Redirige en caso de error
      return of(false);
    })
  );
};
