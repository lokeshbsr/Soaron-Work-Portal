import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginSoaronComponent } from './login-soaron/login-soaron.component';
import { SoaronComponent } from './soaron/soaron.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';


const routes: Routes = [

  { path: 'login', component: LoginSoaronComponent },
  { path: 'forgot-passw', component: ForgotPasswordComponent },
  { path: 'home', component: SoaronComponent },
  { path: '**', redirectTo: 'login' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
