import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistroadminComponent } from './bienvenida/registro/registroadmin/registroadmin.component';
import { LoginComponent } from './bienvenida/login/login.component';
import { RegistrocondominoComponent } from './bienvenida/registro/registrocondomino/registrocondomino.component';
import { RecuperacioncontraseniaComponent } from './bienvenida/login/recuperacioncontrasenia/recuperacioncontrasenia.component';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { HeaderComponent } from './bienvenida/header/header.component'
import { FooterComponent } from './bienvenida/footer/footer.component';
import { ContactoComponent } from './bienvenida/contacto/contacto.component';
import { NavbarComponent } from './bienvenida/navbar/navbar.component';
import { RegistroComponent } from './bienvenida/registro/registro.component';
import { PasswordRecConfirmationComponent } from './bienvenida/login/recuperacioncontrasenia/password-rec-confirmation/password-rec-confirmation.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistroadminComponent,
    LoginComponent,
    RegistrocondominoComponent,
    RecuperacioncontraseniaComponent,
    BienvenidaComponent,
    HeaderComponent,
    FooterComponent,
    ContactoComponent,
    NavbarComponent,
    RegistroComponent,
    PasswordRecConfirmationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
