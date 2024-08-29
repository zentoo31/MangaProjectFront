import { Component,ChangeDetectionStrategy,signal } from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {FormControl, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatFormFieldModule, FloatLabelType} from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {merge} from 'rxjs';
import {toSignal} from '@angular/core/rxjs-interop';
import {map} from 'rxjs/operators';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule, MatIcon, MatButtonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  readonly email = new FormControl('', [Validators.required, Validators.email]);
  readonly floatLabelControl = new FormControl('auto' as FloatLabelType);
  errorMessage = signal('');

  constructor(){
    merge(this.email.statusChanges, this.email.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(()=> this.updateErrorMessage());
  }

  updateErrorMessage() {
    if (this.email.hasError('required')) {
      this.errorMessage.set('Ingresa un correo!');
    } else if (this.email.hasError('email')) {
      this.errorMessage.set('No es un correo válido');
    } else {
      this.errorMessage.set('');
    }
  }
  protected readonly floatLabel = toSignal(
    this.floatLabelControl.valueChanges.pipe(map(v => v || 'auto')),
    {initialValue: 'auto'},
  );
  hide = signal(true);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }
}
