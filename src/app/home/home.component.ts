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
    console.log('in home');
    this.auth.user.subscribe(u => {
      this.user = u;
    });
  }

  logOut() {
    this.auth.signOut();
  }

}
