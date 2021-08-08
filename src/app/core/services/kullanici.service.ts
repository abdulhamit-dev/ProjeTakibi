import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Kullanici } from '../models/kullanici';

@Injectable({
  providedIn: 'root',
})
export class KullaniciService {
  constructor(private fireStore: AngularFirestore) {}


  KullaniciListesi() {
    return this.fireStore.collection('kullanici').snapshotChanges();
  }

  KullaniciGetir(kullaniciAdi:string,parola:string){
    // return this.fireStore.collection('kullanici',ref=>ref.where('kullaniciAdi','==',kullaniciAdi).where('parola','==',parola)).get().toPromise(,);
  return  this.fireStore
    .collection("kullanici",ref=>ref.where("kullaniciAdi","==",kullaniciAdi)).snapshotChanges()
    
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
