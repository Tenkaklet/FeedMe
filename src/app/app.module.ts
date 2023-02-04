import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { WelcomeComponent } from './welcome/welcome.component';
import {firebase, firebaseui, FirebaseUIModule} from 'firebaseui-angular';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from './environments/environment';
@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
