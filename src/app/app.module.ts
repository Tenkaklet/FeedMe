import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { WelcomeComponent } from './welcome/welcome.component';
import { firebase, firebaseui, FirebaseUIModule } from 'firebaseui-angular';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from './environments/environment';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { AngularFireAuthModule, USE_EMULATOR as USE_AUTH_EMULATOR } from "@angular/fire/compat/auth";
import { FormsModule } from "@angular/forms";

const firebaseUiAuthConfig: firebaseui.auth.Config = {
  signInFlow: 'popup',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
      firebase.auth.PhoneAuthProvider.PROVIDER_ID,
      'microsoft.com',
  ],
};



@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    HomeComponent,
    RegistrationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule,
    AngularFireModule.initializeApp(environment.firebase),
    FirebaseUIModule.forRoot(firebaseUiAuthConfig),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
