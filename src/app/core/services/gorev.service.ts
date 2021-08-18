import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Gorev } from '../models/gorev';
import { FirebaseService } from './firebase.service';

@Injectable({
  providedIn: 'root'
})
export class GorevService extends FirebaseService<Gorev> {

  constructor(fireStore: AngularFirestore) { super(fireStore)}
}
