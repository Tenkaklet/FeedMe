import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AngularFireAuthGuard, redirectUnauthorizedTo, redirectLoggedInTo, loggedIn } from '@angular/fire/compat/auth-guard';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { MealPlanerComponent } from './meal-planer/meal-planer.component';
import { CalendarComponent } from './calendar/calendar.component';


const redirecToWelcome = () => redirectUnauthorizedTo(['welcome']);
const redirectAuthedToHome = () => redirectLoggedInTo(['home']);


const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'welcome', component: WelcomeComponent, },
  { path: 'registration', component: RegistrationComponent },
  {
    path: 'home', component: HomeComponent, canActivate: [AngularFireAuthGuard], children: [
      { path: 'meal-planner', component: MealPlanerComponent, canActivate: [AngularFireAuthGuard] },
      { path: 'calendar', component: CalendarComponent, canActivate: [AngularFireAuthGuard] },
      { path: 'profile', component: MealPlanerComponent, canActivate: [AngularFireAuthGuard] },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
