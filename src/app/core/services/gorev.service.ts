import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Gorev } from '../models/gorev';
import { Proje } from '../models/proje';
import { FirebaseService } from './firebase.service';

@Injectable({
  providedIn: 'root'
})
export class GorevService extends FirebaseService<Gorev> {

  constructor(fireStore: AngularFirestore,private fireStoreService: AngularFirestore) { super(fireStore)}

  ProjeGorevListesi(proje:Proje){
    return this.fireStoreService
        .collection('gorev', (ref) =>
          ref.where('projeId', '==', proje.id)
        )
        .snapshotChanges();
  }
}
