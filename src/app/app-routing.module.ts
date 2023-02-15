import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AngularFireAuthGuard, redirectUnauthorizedTo, redirectLoggedInTo, loggedIn } from '@angular/fire/compat/auth-guard';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';


const redirecToWelcome = () => redirectUnauthorizedTo(['welcome']);
const redirectAuthedToHome = () => redirectLoggedInTo(['home']);


const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'welcome', component: WelcomeComponent, },
  { path: 'registration', component: RegistrationComponent },
  { path: 'home', component: HomeComponent, canActivate: [AngularFireAuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
