import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistroadminComponent } from './registroadmin/registroadmin.component';
import { LoginComponent } from './login/login.component';
import { RegistrocondominoComponent } from './registrocondomino/registrocondomino.component';
import { RecuperacioncontraseniaComponent } from './recuperacioncontrasenia/recuperacioncontrasenia.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistroadminComponent,
    LoginComponent,
    RegistrocondominoComponent,
    RecuperacioncontraseniaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
