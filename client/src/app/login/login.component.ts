import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { UiButtonComponent, UiFormComponent, UiInputComponent } from '../ui';

@Component({
  selector: 'cs-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, UiFormComponent, UiInputComponent, UiButtonComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  private readonly fb = inject(FormBuilder);

  readonly loginForm = this.fb.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    rememberMe: [true]
  });

  readonly hasSubmitted = signal(false);
  readonly emailErrors = {
    required: 'Email is required.',
    email: 'Enter a valid email address.'
  };
  readonly passwordErrors = {
    required: 'Password is required.',
    minlength: 'Password must be at least 8 characters.'
  };

  submit(): void {
    this.hasSubmitted.set(true);

    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    console.table(this.loginForm.getRawValue());
  }
}
