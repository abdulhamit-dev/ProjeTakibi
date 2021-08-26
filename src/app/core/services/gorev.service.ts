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

  // ProjeKullaniciGorevListesi(){

  //   return this.fireStoreService
  //   .collection<GorevDto>("gorev")
  //   .valueChanges()
  //   .pipe(
  //     switchMap(gorevs => {
  //       const gorev = uniq(gorevs.map(grv => grv.atananKullaniciId));
  //       console.log(gorev);
  //       return combineLatest(
  //         of(gorevs),
  //         combineLatest(
  //           gorev.map(kulId =>
  //            // console.log(kulId)
  //             this.fireStoreService
  //               .collection<Kullanici>("kullanici", ref =>
  //                 ref.where("id", "==", kulId)
  //               )
  //               .valueChanges()
  //               .pipe(map(kullaniciList => kullaniciList[0]))
  //           )
  //         )
  //       );
  //     }),
  //     map(([gorevList, kullaniciList]) => {
  //       return gorevList.map(gorev => {
  //         return {
  //           ...gorev,
  //           author: kullaniciList.find(a => a.id === gorev.atananKullaniciId)
  //         };
  //       });
  //     })
  //   );
  // }
  
}
