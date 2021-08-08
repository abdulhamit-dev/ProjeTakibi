import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Kullanici } from './core/models/kullanici';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private fireStore: AngularFirestore) { }
  getTests() {
    return this.fireStore.collection('kullanici').snapshotChanges();
 }

 getArananiGetir(deger:string) {
  return this.fireStore.collection('kullanici',ref=>ref.where('kullaniciAdi','==',deger).where('parola','==',deger)).snapshotChanges();
}

addKullanici(kul: Kullanici) {
  return this.fireStore.collection('kullanici').add(Object.assign({},kul));
}

updateKullanici(kul: Kullanici,id:string){
  this.fireStore.doc('kullanici/' + id).update(Object.assign({},kul));
}

deleteKullanici(id:string){
  this.fireStore.doc('kullanici/' + id).delete();
}

}
