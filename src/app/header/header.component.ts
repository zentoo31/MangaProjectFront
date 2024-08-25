import { CommonModule } from '@angular/common';
import { Component, EventEmitter, output } from '@angular/core';
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

  goToLogin(){
    this.router.navigate(['/login']);
  }
}