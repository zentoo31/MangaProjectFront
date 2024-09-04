import { Component,ChangeDetectionStrategy,signal, inject } from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {FormControl, FormsModule, ReactiveFormsModule, Validators, FormGroup} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { UsersService } from '../service/users.service';
import {merge} from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule, MatIcon, MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  readonly email = new FormControl('', [Validators.required, Validators.email]);
  readonly password = new FormControl('', [Validators.required, Validators.minLength(8)]);
  userService = inject(UsersService);
  errorMessage = signal('');
  errorMessage2 = signal('');
  message!: String;
  formulario: FormGroup;

  constructor(){
    merge(this.email.statusChanges, this.email.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(()=> this.updateErrorMessage());
    
      merge(this.password.statusChanges, this.password.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(()=> this.updateErrorMessage2());

    this.formulario  = new FormGroup({
      email: this.email,
      password: this.password
    });
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

  updateErrorMessage2(){
    if (this.password.hasError('required' )) {
      this.errorMessage2.set('Ingresa una contraseña!');
    } else if (this.password.hasError('minlength')) {
      this.errorMessage2.set('La contraseña debe ser mayor a 8 dígitos');
    } else {
      this.errorMessage2.set('');
    }
  }

  hide = signal(true);
  
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

  async onSubmit(){
    if (this.formulario.valid) {
      try {
        const response = await this.userService.login(this.formulario.value);
        if (response && response.sucess) {
          this.message = "Inicio de sesión exitoso";
          console.log(response);
        }
      } catch (error: any) {
        this.message = error.message;
      }
    }
  }



}
