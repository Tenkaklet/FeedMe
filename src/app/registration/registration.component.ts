import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';
import { NgForm } from '@angular/forms';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithRedirect, signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';


export interface User {
  uuid: string;
  verifiedEmail: boolean;
}

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  email: string = '';
  password: string = '';
  forgotEmail: string = '';
  error: boolean = false;
  success: boolean = false;
  errorMsg: string = '';

  userCollection: AngularFirestoreCollection;

  constructor(private auth: AngularFireAuth, public router: Router, private afs: AngularFirestore) {
    this.userCollection = this.afs.collection('users');
  }

  ngOnInit(): void {
    
  }

  loginToGoogle() {
    this.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  loginToGit() {
    const provider = new GithubAuthProvider();
    const auth = getAuth();
    signInWithRedirect(auth, provider)
    .then((result: any) => {
      console.log('the result -->', result);
      
      const user = result.user;

      console.log('the user -->', user);
      
    })
    .catch(err => {
      console.log(err);
    });
  }

  signupUsual(form: NgForm) {
    this.auth.createUserWithEmailAndPassword(this.email, this.password)
    .then((data: any) => {
      const userUID = data.user.multiFactor.user.uid;
      this.userCollection.doc(data.user.multiFactor.user.uid).set({userId: userUID}).then(() => console.log('saved'));
      window.localStorage.setItem('userId', userUID);
      data.user.sendEmailVerification()
      .then((res: any) => { 
        this.error = false;
        this.success = true;
      })
      .catch((err: any) => {
        this.error = true;
        this.errorMsg = err.message;
        
      })
      
    })
    .catch(err => {
      this.error = true;
      this.errorMsg = err.message;
    });
  }

  signIn(form: NgForm) {
    
    const { email, password } = form.form.controls;
    
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email.value, password.value)
    .then((data: any) => {
      const userUID = data.user.multiFactor.user.uid;
      window.localStorage.setItem('userId', userUID);
      this.error = false;
      this.router.navigate(['home']);
    })
    .catch(err => {
      this.error = true;
      this.errorMsg = err.message;
    })
    
  }

  resendPassword(form: NgForm) {
    const { email } = form.form.controls;
    const auth = getAuth();
    this.auth.sendPasswordResetEmail(email.value)
    .then(() => {
      console.log('email sent');
      this.success = true;
    })
    .catch(err => {
      console.log(err);
    });
  }
}
