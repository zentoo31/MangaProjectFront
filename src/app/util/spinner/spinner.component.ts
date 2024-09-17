import { Component, inject } from '@angular/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { SpinnerService } from '../../service/spinner.service';
@Component({
  selector: 'app-spinner',
  standalone: true,
  imports: [MatProgressSpinnerModule],
  templateUrl: './spinner.component.html',
  styleUrl: './spinner.component.css'
})
export class SpinnerComponent {
  private readonly spinnerService = inject(SpinnerService);
  isLoading = this.spinnerService.isLoading; 
}
