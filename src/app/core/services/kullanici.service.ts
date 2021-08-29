import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Kullanici } from '../models/kullanici';
import { FirebaseService } from './firebase.service';

@Injectable({
  providedIn: 'root',
})
export class KullaniciService extends FirebaseService<Kullanici> {
  constructor(fireStore: AngularFirestore,private fireStoreService: AngularFirestore) {super(fireStore)}
  KullaniciGetir(kullaniciId:string){
    return this.fireStoreService.collection("kullanici",(ref)=>ref.where('id','==',kullaniciId)).valueChanges()
  }
}
