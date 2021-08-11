import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export abstract class FirebaseService<T> {

  constructor(private fireStore: AngularFirestore) { }

  List(collectionName:string){
    return this.fireStore.collection(collectionName).snapshotChanges()
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
