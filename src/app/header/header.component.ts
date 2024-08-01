import { CommonModule } from '@angular/common';
import { Component, output } from '@angular/core';
import { EventEmitter } from 'node:stream';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent  {
  mode: number = 0;
  numberEmit = output<number>();
  
  emitNumber(){
    this.numberEmit.emit(this.mode);
  }

  actualizarBotonUI(){
    this.mode = (this.mode + 1) % 2;
  }

}