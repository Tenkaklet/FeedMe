import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/compat/auth-guard';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';



const redirecToWelcome = () => redirectUnauthorizedTo(['welcome']);

const routes: Routes = [
  { path: '', component: AppComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirecToWelcome } },
  { path: 'welcome', component: WelcomeComponent, },
  { path: 'home', component: HomeComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: null }}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
