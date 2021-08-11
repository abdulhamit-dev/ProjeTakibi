import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export abstract class FirebaseService<T> {

  constructor(private fireStore: AngularFirestore) { }

  Login(kullaniciAdi:string){
    return this.fireStore
        .collection('kullanici', (ref) =>
          ref.where('kullaniciAdi', '==', kullaniciAdi)
        )
        .snapshotChanges();
  }
  List(collectionName:string){
    return this.fireStore.collection(collectionName).snapshotChanges()
  }
  Listv2(collectionName:string){
    return this.fireStore.collection<T>(collectionName).valueChanges()
  }
  Add(collection:T,collectionName:string){
    return this.fireStore.collection(collectionName).add(Object.assign({},collection));
  }
  Delete(id: string,collectionName:string) {
    return this.fireStore.doc(collectionName+'/' + id).delete();
  }
  Update(collection: T,id:string,collectionName:string) {
    return this.fireStore
      .doc(collectionName+ '/' +id)
      .update(Object.assign({}, collection));
  }
}
