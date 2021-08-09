import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ProjeHareket } from '../models/projeHareket';

@Injectable({
  providedIn: 'root'
})
export class ProjeHareketService {

  constructor(private fireStore: AngularFirestore) { }

  ProjeHareketList(){
    return this.fireStore.collection<ProjeHareket>('projeHareket').valueChanges()
  }
}
