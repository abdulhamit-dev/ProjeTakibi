import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Proje } from '../models/proje';

@Injectable({
  providedIn: 'root'
})
export class ProjeService {

  constructor(private fireStore: AngularFirestore) { }

  ProjeList(){
    return this.fireStore.collection('proje').snapshotChanges();
  }
  AddProje(proje:Proje){
    return this.fireStore.collection('proje').add(Object.assign({},proje));
  }

  DeleteProje(id: string) {
    return this.fireStore.doc('proje/' + id).delete();
  }
  UpdateProje(proje: Proje) {
    return this.fireStore
      .doc('proje/' + proje.id)
      .update(Object.assign({}, proje));
  }
}
