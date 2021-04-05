import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ReactiveFormsModule,
  FormsModule,
  HttpClientModule,
  BrowserAnimationsModule,
  ToastrModule.forRoot({
    timeOut: 10000,
    positionClass: 'toast-top-right',

  }),

 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
