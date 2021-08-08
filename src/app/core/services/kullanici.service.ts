import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Kullanici } from '../models/kullanici';

@Injectable({
  providedIn: 'root',
})
export class KullaniciService {
  constructor(private fireStore: AngularFirestore) {}

  KullaniciListesi() {
    return this.fireStore.collection('kullanici').snapshotChanges();
  }

  DeleteKullanici(id: string) {
    return this.fireStore.doc('kullanici/' + id).delete();
  }

  AddKullanici(kul: Kullanici) {
    return this.fireStore.collection('kullanici').add(Object.assign({}, kul));
  }

  UpdateKullanici(kul: Kullanici) {
    return this.fireStore
      .doc('kullanici/' + kul.id)
      .update(Object.assign({}, kul));
  }
}
