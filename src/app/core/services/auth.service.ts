import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Kullanici } from '../models/kullanici';
import { FirebaseService } from './firebase.service';
import { KullaniciService } from './kullanici.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends FirebaseService<Kullanici> {

  constructor(fireStore: AngularFirestore) {super(fireStore)}

 
}
