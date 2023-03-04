import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  constructor(private auth: AngularFireAuth, public router: Router) {}
  avatarURL = 'https://picsum.photos/200';
  
  ngOnInit(): void {
    this.auth.user.subscribe(u => {
      this.avatarURL = u?.photoURL!;
    });
    
  }
  

  logOut() {
    this.auth.signOut();
    window.localStorage.clear();
    this.router.navigate(['registration']);
  }
}
