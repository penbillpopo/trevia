import { Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { LandingComponent } from './landing/landing.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { RegisterComponent } from './register/register.component';
import { TermsPrivacyComponent } from './legal/terms-privacy.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'terms', component: TermsPrivacyComponent },
  { path: 'landing', component: LandingComponent },
  { path: '**', redirectTo: 'login' }
];
