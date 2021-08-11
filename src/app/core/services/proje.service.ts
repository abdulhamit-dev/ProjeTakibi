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

  // ProjeList() {
  //   return this.fbService.List('proje');
  // }

  // // Test(){
  // //   return this.fireStore.collection<Proje>('proje').valueChanges()
  // // }

  // AddProje(proje: Proje) {
  //   return this.fbService.Add(proje, 'proje');
  // }

  // DeleteProje(id: string) {
  //   return this.fbService.Delete(id, 'proje');
  // }
  // UpdateProje(proje: Proje) {
  //   return this.fbService.Update(proje, proje.id, 'proje');
  // }
}
