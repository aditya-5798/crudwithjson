import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeRegistrationComponent } from './pages/employee-registration/employee-registration.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeUpdateComponent } from './pages/employee-update/employee-update.component';
import { LoginComponent } from './movies components/login/login.component';
import { HomeComponent } from './movies components/home/home.component';
import { HeaderComponent } from './movies components/header/header.component';
import { MoviesComponent } from './movies components/movies/movies.component';
@NgModule({
  declarations: [
    AppComponent,
    EmployeeRegistrationComponent,
    EmployeeUpdateComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    MoviesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
