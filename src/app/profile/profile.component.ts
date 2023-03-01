import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { open } from '@tauri-apps/api/dialog';
import { isPermissionGranted, requestPermission, sendNotification } from '@tauri-apps/api/notification';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profileImage = '../../assets/images/ninja.png';
  userName:string | null | undefined;
  userEmail:string | null | undefined;
  constructor(private afs: AngularFirestore, private afAuth: AngularFireAuth) {}



  ngOnInit(): void {
    this.afAuth.user.subscribe(data => {
      this.userEmail = data?.email; 
      this.userName = data?.displayName;
    });
  }



  // Open a selection dialog for image files
  async openDialog() {
    const profilePhoto = await open({
      multiple: false,
      filters: [{
        name: 'Image',
        extensions: ['png', 'jpeg']
      }],
    });
    console.log('selected is', profilePhoto);
  }

  //* Toggle Notifications switch */
  async onCheckChange(event: any) {
    let permissionGranted = await isPermissionGranted();
    const check = event.target.checked;
    const permission = await requestPermission();

    if(check) {
      permissionGranted = permission === 'granted';
    } else {
      permissionGranted = permission === 'denied';
    }
    
    if (permissionGranted) {
      sendNotification({title: 'Feed Me', body: 'Notifications enabled'});
    }

    
    if(!check) {
      sendNotification({title: 'Feed Me', body: 'Notifications disabled'});
      const permission = await requestPermission();
      permissionGranted = permission === 'denied';
    }
  }
}
