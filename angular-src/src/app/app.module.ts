import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { JwtInterceptor } from './helper/jwt.interceptor';

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
import { AuctionsStateComponent } from './auctions-state/auctions-state.component';

import { AuthService } from './services/auth.service';
import { JwtModule } from '@auth0/angular-jwt';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent,
    RegisterComponent,
    AuctionsComponent,
    HomeComponent,
    ResaleFormComponent,
    AuctionsStateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    NgbModule,
    MDBBootstrapModule.forRoot(),
    ChartsModule,
    JwtModule,
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
      },
      {
        path:'app-home/app-auctions-state', component: AuctionsStateComponent
      },
      {path:'app-login/app-register',component:RegisterComponent}

    ])
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
