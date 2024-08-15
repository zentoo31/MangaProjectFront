import { Component } from '@angular/core';

@Component({
  selector: 'app-requests',
  standalone: true,
  imports: [],
  templateUrl: './requests.component.html',
  styleUrl: './requests.component.css'
})

export class RequestsComponent {
  
  loadDisqus(){
    (function(){
      var d = document, s = d.createElement('script');
      s.src = 'https://testpagecom.disqus.com/embed.js';
      s.setAttribute('data-timestamp', new Date().getTime.toString());
      (d.head || d.body).appendChild(s);
    })();
  }
}
