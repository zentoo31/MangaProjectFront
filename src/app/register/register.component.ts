  import { Component, inject, signal } from '@angular/core';
  import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
  import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
  import {MatFormFieldModule, FloatLabelType} from '@angular/material/form-field';
  import { MatIcon } from '@angular/material/icon';
  import {MatInputModule} from '@angular/material/input';
  import {MatButtonModule} from '@angular/material/button';
  import {merge} from 'rxjs';
  import {toSignal} from '@angular/core/rxjs-interop';
  import {map} from 'rxjs/operators';
  import { UsersService } from '../service/users.service';
  import { Router } from '@angular/router';
  @Component({
    selector: 'app-register',
    standalone: true,
    imports: [MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule, MatIcon, MatButtonModule],
    templateUrl: './register.component.html',
    styleUrl: './register.component.css'
  })

  export class RegisterComponent {
    readonly email = new FormControl('', [Validators.required, Validators.email]);
    readonly password = new FormControl('', [Validators.required, Validators.minLength(8)]);
    readonly floatLabelControl = new FormControl('auto' as FloatLabelType);
    errorMessage = signal('');
    errorMessage2 = signal('');
    formulario: FormGroup;
    message!: String;
    userService = inject(UsersService);
    constructor(private router: Router){
      merge(this.email.statusChanges, this.email.valueChanges)
        .pipe(takeUntilDestroyed())
        .subscribe(()=> this.updateErrorMessage());

      merge(this.password.statusChanges, this.password.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(()=> this.updateErrorMessage2());

      this.formulario = new FormGroup({
        username: new FormControl('',Validators.required),
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

    protected readonly floatLabel = toSignal(this.floatLabelControl.valueChanges.pipe(map(v => v || 'auto')),{initialValue: 'auto'},);
    hide = signal(true);
    clickEvent(event: MouseEvent) {
      this.hide.set(!this.hide());
      event.stopPropagation();
    }

    async onSubmit() {
      if (this.formulario.valid) {
        try {
          const response = await this.userService.register(this.formulario.value);
          if (response === true) { 
            this.message = 'Registro exitoso'; 
            setTimeout(() => {
              this.router.navigate(['/login']);
            }, 1000);
          } else {
            this.message = 'Registro fallido';
          }
        } catch (error: any) {
          this.message = error.message; 
        }
      }
    }
    
  }
