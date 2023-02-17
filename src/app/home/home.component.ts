import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  user: {} | null = {};

  constructor(public auth: AngularFireAuth, private router: Router) {}
  ngOnInit(): void {
    this.auth.authState.subscribe(user => {
      if (!user?.emailVerified) {
        this.router.navigate(['registration']);
      } else {
        // todo: if the user has sign up and they are past the welcome screen. Go directly to home.
        this.router.navigate(['home']);
      }
      
    });
    this.auth.user.subscribe(u => {
      this.user = u;
    });
  }

  logOut() {
    this.auth.signOut();
    this.router.navigate(['registration']);
  }

}
