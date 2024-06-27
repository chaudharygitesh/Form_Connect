import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { CopyPasteBlockDirective } from './login/CopyPasteBlock.directive';
import { RegistrationComponent } from './registration/registration.component';
import { ReflectComponent } from './reflect/reflect.component';
import { CreatepasswordComponent } from './createpassword/createpassword.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CopyPasteBlockDirective,
    RegistrationComponent,
    ReflectComponent,
    CreatepasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }