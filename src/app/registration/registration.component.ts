import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { FirebaseUISignInFailure, FirebaseUISignInSuccessWithAuthResult } from 'firebaseui-angular';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  constructor(private auth: AngularFireAuth, public router: Router) {
    
  }

  ngOnInit(): void {
    this.auth.authState.subscribe(user => {
      console.log(user);
      
      if (user) {
        this.router.navigate(['home']);
      } else {
        // todo: if the user has sign up and they are past the welcome screen. Go directly to home.
        this.router.navigate(['registration']);
      }
      
    }).unsubscribe();
  }
  // sign in success
  signInSuccess(event: FirebaseUISignInSuccessWithAuthResult) {
    console.log('success', event);
    
    this.router.navigate(['home']);
  }

  // sign in failure
  signInFailure(event: FirebaseUISignInFailure) {
    console.error('Error: ', event);
  }
}
