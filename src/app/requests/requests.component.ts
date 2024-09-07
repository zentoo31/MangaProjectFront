import { Component } from '@angular/core';

@Component({
  selector: 'app-requests',
  standalone: true,
  imports: [],
  templateUrl: './requests.component.html',
  styleUrl: './requests.component.css'
})

export class RequestsComponent {
  ngOnInit(){
    this.loadDisqus();
  }
  
  async loadDisqus(){
     (await function() { // DON'T EDIT BELOW THIS LINE
    var d = document, s = d.createElement('script');
    s.src = 'https://testpage-com.disqus.com/embed.js';
    s.setAttribute('data-timestamp', '' + new Date());
    s.setAttribute('data-theme', 'dark');
    (d.head || d.body).appendChild(s);
    })();
  }
}
