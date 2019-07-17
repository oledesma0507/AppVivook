import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './bienvenida/login/login.component';
import { RegistroadminComponent } from './bienvenida/registro/registroadmin/registroadmin.component';
import { RegistroComponent } from './bienvenida/registro/registro.component';
import { RegistrocondominoComponent } from './bienvenida/registro/registrocondomino/registrocondomino.component';
import { RecuperacioncontraseniaComponent } from './bienvenida/login/recuperacioncontrasenia/recuperacioncontrasenia.component';
import { PasswordRecConfirmationComponent } from './bienvenida/login/recuperacioncontrasenia/password-rec-confirmation/password-rec-confirmation.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent, children: [
    { path: 'cond', component: RegistrocondominoComponent },
    { path: 'admin', component: RegistroadminComponent }
  ]},
  { path: 'password-recovery', component: RecuperacioncontraseniaComponent, children: [
    { path: 'confirmation', component: PasswordRecConfirmationComponent }
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
