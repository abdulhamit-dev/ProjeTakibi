import { Component, OnInit } from '@angular/core';
import { Kullanici } from 'src/app/core/models/kullanici';
import { KullaniciService } from 'src/app/core/services/kullanici.service';
import { TestService } from 'src/app/test.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  constructor(private kullaniciService: KullaniciService) { }

  kullaniciList: Kullanici[] = [];
  kullanici: Kullanici = new Kullanici();
  selectKullanici: Kullanici = new Kullanici();
  displayModal!: boolean;
  ngOnInit(): void {
    this.KullaniciList();
  }

  KullaniciList() {
    this.kullaniciService.List('kullanici').subscribe((rv) => {
      this.kullaniciList = rv.map((k) => {
        const data = k.payload.doc.data() as Kullanici;
        data.id = k.payload.doc.id;
        return data;
      });
    });
  }

  AddKullanici() {
    var kullanici = this.kullaniciList.find(x => x.kullaniciAdi == this.kullanici.kullaniciAdi)

    if (kullanici === undefined) {
      this.kullaniciService.Add(this.kullanici, 'kullanici');
    } else {
      alert("Aynı kullanıcı adı daha önce kaydedilmiş.")
    }
  }

  // DeleteKullanici(id: string) {
  //   this.kullaniciService.DeleteKullanici(id);
  // }

  ShowModalDialog(kul: Kullanici) {
    this.selectKullanici = kul;
    this.displayModal = true;
  }
  UpdateKullanici() {
    this.selectKullanici.kullaniciAdi = (<HTMLInputElement>document.getElementById("txtKullaniciAdi")).value;
    this.selectKullanici.parola = (<HTMLInputElement>document.getElementById("txtParola")).value;
    this.selectKullanici.ad = (<HTMLInputElement>document.getElementById("txtAd")).value;
    this.selectKullanici.soyad = (<HTMLInputElement>document.getElementById("txtSoyad")).value;
    this.selectKullanici.eposta = (<HTMLInputElement>document.getElementById("txtEposta")).value;
    this.kullaniciService.Update(this.selectKullanici, this.selectKullanici.id, 'kullanici');
    this.displayModal = false;
  }

  DeleteControl(kul: Kullanici) {
    this.kullaniciService.Delete(kul.id, 'kullanici')
  }




  ModalVazgec(): void {
    this.displayModal = false;
  }

}
