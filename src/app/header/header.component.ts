import { CommonModule } from '@angular/common';
import { Component, inject, output } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { fadeAnimation} from '../../animation';
import { AuthService } from '../service/auth.service';
import { UsersService } from '../service/users.service';
import { UserInfoService } from '../service/user-info.service';
import { User } from '../user-info/user';

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
  header: User | undefined;
  isAuthenticated: boolean = false;
  numberEmit = output<number>();
  authService = inject(AuthService);
  userService = inject(UsersService);
  userInfoService = inject(UserInfoService);  

  constructor(private router: Router) {}

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
    this.getHeader();  
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

  getHeader(){
    this.userInfoService.getHeaders().then(
      header => this.header = header
    ).catch( error => {
      console.error(error);   
    });
  }

}