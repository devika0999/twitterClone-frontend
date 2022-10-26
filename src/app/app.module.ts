import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { TweetpageComponent } from './tweetpage/tweetpage.component';
import { ViewtweetComponent } from './viewtweet/viewtweet.component';

const appRoutes:Routes=[
  {
    path:"",component:LoginComponent
  },
  {
    path:"signup",component:SignupComponent
  },
  {
    path:"tweet",component:TweetpageComponent
  },
  {
    path:"mytweet",component:ViewtweetComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    NavbarComponent,
    TweetpageComponent,
    ViewtweetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
