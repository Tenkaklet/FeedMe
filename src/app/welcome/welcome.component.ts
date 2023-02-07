import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {
  constructor(public router: Router) {}



  // Route to Registration page.
  toRegistration() {
    this.router.navigate(['home']);
  }
}
