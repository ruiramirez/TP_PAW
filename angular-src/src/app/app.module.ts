import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './helper/jwt.interceptor';

import { AngularFontAwesomeModule } from 'angular-font-awesome';

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
import { AuthGuardService } from './services/auth-guard.service';

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
		AngularFontAwesomeModule,
		MDBBootstrapModule.forRoot(),
		ChartsModule,
		JwtModule,
		RouterModule
	],
	providers: [{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }, AuthService, AuthGuardService],
	bootstrap: [AppComponent]
})
export class AppModule { }
