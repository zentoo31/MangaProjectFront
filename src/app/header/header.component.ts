import { CommonModule } from '@angular/common';
import { Component, inject, output } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { fadeAnimation} from '../../animation';
import { AuthService } from '../service/auth.service';
import { map } from 'rxjs';
import { UsersService } from '../service/users.service';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  animations: [fadeAnimation]
})
export class HeaderComponent  {
  mode: number = 0;
  authService = inject(AuthService);
  isAuthenticated: boolean = false;
  userService = inject(UsersService);


  constructor(private router: Router) {}
  numberEmit = output<number>();

  sendData(inputValue: string){
    const formattedValue = inputValue.replace(/ /g, '+');
    this.router.navigate(['/directory/', "00/", formattedValue]);
  }

  emitNumber(){
    this.numberEmit.emit(this.mode);
  }

  actualizarBotonUI(){
    this.mode = (this.mode + 1) % 2;
  }

  goTo(ruta: String){
    this.router.navigate([ruta]);
  }

  ngOnInit():void{
    this.authService.checkAuth().subscribe({
      next: (authenticated) => {
        this.isAuthenticated = authenticated;
      },
      error: () => {
        this.isAuthenticated = false;
      }
    });    
  }

 logout() {
   this.userService.logout().subscribe({
      next: (response) => {
        console.log(response.message);
        this.ngOnInit();
        globalThis.window.location.reload();
      },
      error: (error) => {
        console.error('Error al cerrar sesión', error);
      }
    });
  }
}