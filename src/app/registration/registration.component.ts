import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';
import { NgForm } from '@angular/forms';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithRedirect, signInWithEmailAndPassword } from "firebase/auth";


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
  errorMsg: string = '';
  
  constructor(private auth: AngularFireAuth, public router: Router) {
    
  }

  ngOnInit(): void {
    console.log('inside register');
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
      console.log('the data of user ', data);

      data.user.sendEmailVerification()
      .then((res: any) => {
        console.log('Email sent ');
      })
      .catch((err: any) => {
        console.log('Error ', err);
        
      })
      
      //this.router.navigate(['home']);
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
    .then((data) => {
      this.router.navigate(['home']);
    })
    .catch(err => {
      this.error = true;
      this.errorMsg = err.message;
    })
    
  }
}
