import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { combineLatest, Observable, of } from 'rxjs';
import { GorevDto } from '../models/dtos/gorevDto';
import { Gorev } from '../models/gorev';
import { Proje } from '../models/proje';
import { FirebaseService } from './firebase.service';
import { map, switchMap } from "rxjs/operators";
import { uniq, flatten } from "lodash";
import { Kullanici } from '../models/kullanici';

@Injectable({
  providedIn: 'root'
})
export class GorevService extends FirebaseService<Gorev> {

  constructor(fireStore: AngularFirestore,private fireStoreService: AngularFirestore) { super(fireStore)}
  joined$: Observable<any> | undefined;
  ProjeGorevListesi(proje:Proje){
    return this.fireStoreService
        .collection('gorev', (ref) =>
          ref.where('projeId', '==', proje.id)
        )
        .snapshotChanges();
  }

}
