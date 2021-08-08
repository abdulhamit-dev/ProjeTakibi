import { Component, OnInit } from '@angular/core';
import { Kullanici } from 'src/app/core/models/kullanici';
import { KullaniciService } from 'src/app/core/services/kullanici.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  constructor(private kullaniciService: KullaniciService) {}

  kullaniciList: Kullanici[] = [];
  kullanici: Kullanici = new Kullanici();
  selectKullanici: Kullanici = new Kullanici();
  displayModal!: boolean;
  ngOnInit(): void {
    this.KullaniciList();
  }

  KullaniciList() {
    this.kullaniciService.KullaniciListesi().subscribe((rv) => {
      this.kullaniciList = rv.map((k) => {
        const data = k.payload.doc.data() as Kullanici;
        data.id = k.payload.doc.id;
        return data;
      });
    });
  }

  AddKullanici() {
    this.kullaniciService.AddKullanici(this.kullanici);
  }

  DeleteKullanici(id: string) {
    this.kullaniciService.DeleteKullanici(id);
  }

  ShowModalDialog(kul: Kullanici) {
    this.selectKullanici = kul;
    this.displayModal = true;
  }
  UpdateKullanici() {
    this.selectKullanici.kullaniciAdi= (<HTMLInputElement>document.getElementById("txtKullaniciAdi")).value;
    this.selectKullanici.parola=(<HTMLInputElement>document.getElementById("txtParola")).value;
    this.selectKullanici.ad=(<HTMLInputElement>document.getElementById("txtAd")).value;
    this.selectKullanici.soyad=(<HTMLInputElement>document.getElementById("txtSoyad")).value;
    this.selectKullanici.eposta=(<HTMLInputElement>document.getElementById("txtEposta")).value;
    this.kullaniciService.UpdateKullanici(this.selectKullanici);
    this.displayModal=false;
  }
}
