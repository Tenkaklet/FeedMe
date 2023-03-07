import { Component } from '@angular/core';
import { User } from 'firebase/auth';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  user: any  = null;
  timeOfDay: string = '';
  constructor(private authService: AuthService) {
    this.startDashBoard();
  }


  startDashBoard() {
    this.currentUser();
    this.getTimeOfDay();
  }

  async currentUser() {
    const user = await this.authService.getCurrentUser();
    this.user = user;
  }

  getTimeOfDay() {
    let currentTime = new Date().getHours();
    if(currentTime < 12) {
      this.timeOfDay = 'Good Morning';
    } else if(currentTime >= 12 && currentTime < 17) {
      this.timeOfDay = 'Good Afternoon';
    } else {
      this.timeOfDay = 'Good Evening';
    }
  }
}
