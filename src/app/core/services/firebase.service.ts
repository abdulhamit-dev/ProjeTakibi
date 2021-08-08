import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { StreamPriorityOptions } from 'http2';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private fireAuth:AngularFireAuth) { }

  // SignIn(email:string,password:string){
  //   return this.fireAuth.signInWithEmailAndPassword(email,password)
  // }

  // SingOut(){

  // }
}
