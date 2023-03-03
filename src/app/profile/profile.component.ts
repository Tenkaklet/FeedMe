import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { open } from '@tauri-apps/api/dialog';
import { isPermissionGranted, requestPermission, sendNotification } from '@tauri-apps/api/notification';
import { updateProfile, UserInfo } from 'firebase/auth';
import { concatMap, Observable, of } from 'rxjs';
import { ImageUploadService } from '../image-upload.service';
import { getStorage, ref } from "firebase/storage";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profileImage: string | null | undefined;
  userName:string | null | undefined;
  userEmail:string | null | undefined;
  useruid: any;
  constructor(private afs: AngularFirestore, private afAuth: AngularFireAuth, private storage: AngularFireStorage) {}



  ngOnInit(): void {
    this.afAuth.user.subscribe(data => {
      this.useruid = data?.uid;
      this.profileImage = data?.photoURL || '../../assets/images/ninja.png';
      this.userEmail = data?.email; 
      this.userName = data?.displayName;
    });
  }


// ** Selects the persons profile picture.
  async openDialog(event: any) {
    this.profileImage = event.target.files[0];
    const photoPath = `images/profile/${this.useruid}`;
    const currentUser = this.afAuth.currentUser;
    const task = this.storage.upload(photoPath, this.profileImage);
    task.then((data) => {
      data.ref.getDownloadURL()
      .then(url => {
        this.profileImage = url;
        currentUser.then(u => {
          u?.updateProfile({
            photoURL: this.profileImage,
          });
        })
      });
    });
    
    return(await this.afAuth.currentUser)?.updateProfile({photoURL: this.profileImage});
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
