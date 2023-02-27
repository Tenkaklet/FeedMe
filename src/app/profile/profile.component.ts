import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { open } from '@tauri-apps/api/dialog';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  profileImage = '../../assets/images/ninja.png';
  constructor(private afs: AngularFirestore) {}

  async openDialog() {
    // Open a selection dialog for image files
    const selectedPhoto = await open({
      multiple: false,
      filters: [{
        name: 'Image',
        extensions: ['png', 'jpeg']
      }],
    });
    console.log('selected is', selectedPhoto);
    

  }
}
