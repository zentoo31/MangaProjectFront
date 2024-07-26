import { CommonModule } from '@angular/common';
import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  mode: number = 0;
  

  actualizarBotonUI(){
    this.mode = (this.mode + 1) % 2;
  }

}
