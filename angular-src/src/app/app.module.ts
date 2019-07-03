import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { RegisterComponent } from './register/register.component';
import { AuctionsComponent } from './auctions/auctions.component';
import { HomeComponent } from './home/home.component';
import { ChartsModule } from 'ng2-charts';
import { ResaleFormComponent } from './resale-form/resale-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent,
    RegisterComponent,
    AuctionsComponent,
    HomeComponent,
    ResaleFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MDBBootstrapModule.forRoot(),
    ChartsModule,
    RouterModule.forRoot([
      {
        path: '', redirectTo: 'app-login', pathMatch: 'full'
      },
      {
        path: 'app-nav', component: NavComponent
      },
      {
        path: 'app-login',
        component: LoginComponent
      },
      {
        path: 'app-register', component: RegisterComponent
      },
      {
        path: 'app-auctions', component: AuctionsComponent
      },
      {
        path: 'app-home/app-resale-form', component: ResaleFormComponent
      }

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
