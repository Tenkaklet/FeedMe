import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private auth: AngularFireAuth, private router: Router) {
    this.auth.authState.subscribe(user => {
      console.log(user);
      
      if (!user?.emailVerified) {
        this.router.navigate(['registration']);
      } else {
        // todo: if the user has sign up and they are past the welcome screen. Go directly to home.
        this.router.navigate(['home']);
      }
      
    });
  }
}
