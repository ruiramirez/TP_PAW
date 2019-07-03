import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ResaleFormComponent } from './resale-form/resale-form.component';
import { AuctionsComponent } from './auctions/auctions.component';
import { AuctionsStateComponent } from './auctions-state/auctions-state.component';

const routes: Routes = [
  { path: 'app-login', component: LoginComponent },
  { path: 'app-register', component: RegisterComponent },
  { path: 'app-home', component: HomeComponent },
  { path: 'app-auctions', component: AuctionsComponent },
  {path:'app-auctions-state',component:AuctionsStateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
