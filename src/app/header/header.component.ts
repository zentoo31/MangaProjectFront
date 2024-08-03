import { CommonModule } from '@angular/common';
import { Component, output } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { fadeAnimation} from '../../animation';
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
  constructor(private router: Router) {}
  numberEmit = output<number>();
  
  emitNumber(){
    this.numberEmit.emit(this.mode);
  }

  actualizarBotonUI(){
    this.mode = (this.mode + 1) % 2;
  }

  goToLogin(){
    this.router.navigate(['/login']);
  }
}