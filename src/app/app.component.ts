import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { DashboardComponent } from './dashboard/dashboard.component';
import { fadeAnimation } from '../animation';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, DashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations: [fadeAnimation]
})

export class AppComponent {
  mode: number = 0;

  reciviedNumber(value: number){
    this.mode = value;
    this.updateMode();
  }

  updateMode(){
    if (this.mode == 1) {
      document.body.setAttribute('data-bs-theme','light');
    }else{
      document.body.setAttribute('data-bs-theme','dark');
    }
  }
  
}
