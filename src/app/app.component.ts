import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public auth: AngularFireAuth) {
    this.loggedIn();
  }


  loggedIn() {
    this.auth.onAuthStateChanged(user => {
      if (user) {
        console.log('User is signed in');
      } else {
        console.log('User is not signed in');
      }
    })
  }
}
