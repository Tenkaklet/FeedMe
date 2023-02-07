import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public auth: AngularFireAuth, private router: Router) {
    console.log('hi');
    
    this.auth.authState.subscribe(user => {
      console.log(user);
      
      if (user) {
        this.router.navigate(['home']);
      } else {
        this.router.navigate(['welcome'])
      }
    });
  }
}
