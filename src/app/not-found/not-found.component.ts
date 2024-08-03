import { Component } from '@angular/core';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [],
  template: `
<section class="py-3 py-md-5 d-flex justify-content-center align-items-center" style="min-height: 700px;">
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="text-center">
          <h2 class="d-flex justify-content-center align-items-center gap-2 mb-4">
            <span class="display-1 fw-bold">4</span>
            <i class="bi bi-exclamation-circle-fill text-danger display-4"></i>
            <span class="display-1 fw-bold bsb-flip-h">4</span>
          </h2>
          <h3 class="h2 mb-2">Oops! Te perdiste!</h3>
          <p class="mb-5">La página que buscabas, no existe.</p>
        </div>
      </div>
    </div>
  </div>
</section>
  `,
  styles: ``
})
export class NotFoundComponent {

}
