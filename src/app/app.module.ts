import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ElectrocardiographyComponent } from './electrocardiography/electrocardiography.component';
import { HeaderComponent } from './header/header.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { MyProfilrComponent } from './my-profilr/my-profilr.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ElectrocardiographyComponent,
    HeaderComponent,
    ForgotPasswordComponent,
    UpdateProfileComponent,
    MyProfilrComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    // HttpRequest
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
