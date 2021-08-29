import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Kullanici } from '../models/kullanici';
import { FirebaseService } from './firebase.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends FirebaseService<Kullanici> {

  constructor(fireStore: AngularFirestore) {super(fireStore)}


}
