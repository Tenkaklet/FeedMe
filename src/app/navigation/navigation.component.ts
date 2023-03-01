import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  constructor(private auth: AngularFireAuth, public router: Router) {}
  avatarURL = 'https://picsum.photos/200';

  logOut() {
    this.auth.signOut();
    window.localStorage.clear();
    this.router.navigate(['registration']);
  }
}
