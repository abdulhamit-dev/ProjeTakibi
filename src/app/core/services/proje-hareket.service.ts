import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Proje } from '../models/proje';
import { ProjeHareket } from '../models/projeHareket';
import { FirebaseService } from './firebase.service';

@Injectable({
  providedIn: 'root'
})
export class ProjeHareketService extends FirebaseService<ProjeHareket> {

  constructor(fireStore: AngularFirestore) {
    super(fireStore)
   }
}
