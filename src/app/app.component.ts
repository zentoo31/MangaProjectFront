import { Component } from '@angular/core';
import { NavigationEnd, NavigationStart, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { DashboardComponent } from './dashboard/dashboard.component';
import { fadeAnimation } from '../animation';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, DashboardComponent, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations: [fadeAnimation]
})

export class AppComponent{
  mode: number = 0;

  constructor(private router: Router){}

  reciviedNumber(value: number){
    this.mode = value;
    this.updateMode();
  }
  
  updateMode(){
    if (this.mode == 1) {
      globalThis.document.body.setAttribute('data-bs-theme','light');
    }else{
      globalThis.document.body.setAttribute('data-bs-theme','dark');
    }
  }

  ngOnInit() {
    this.router.events.subscribe(event => {
      const progressBar = globalThis.document.querySelector('.progress-bar') as HTMLElement;

      if (progressBar) { // Asegura que progressBar no es undefined
        if (event instanceof NavigationStart) {
          progressBar.style.width = '0%';
          progressBar.style.transition = 'width 0.4s ease';
          setTimeout(() => progressBar.style.width = '50%', 100);  // Simula un proceso de carga inicial
        }

        if (event instanceof NavigationEnd) {
          setTimeout(() => progressBar.style.width = '100%', 400); // Completa la barra de progreso
          setTimeout(() => progressBar.style.width = '0%', 600);   // Resetea la barra después de un breve tiempo
        }
      } else {
        console.error('Progress bar element not found');
      }
    });

    
  }
  
}
