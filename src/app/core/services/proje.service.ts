import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Proje } from '../models/proje';
import { FirebaseService } from './firebase.service';

@Injectable({
  providedIn: 'root',
})
export class ProjeService extends FirebaseService<Proje> {
  constructor(
    fireStore:AngularFirestore
  ) {
    super(fireStore);
  }
}
