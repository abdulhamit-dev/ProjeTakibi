import { Component, OnInit } from '@angular/core';
import { Kullanici } from '../core/models/kullanici';
import { TestService } from '../test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
  constructor(private testService: TestService) {}
  kullanici: Kullanici = new Kullanici();
  allNotes: any;
  arananacakDeger!: string;
  ngOnInit(): void {
    this.TestGetir();
  }

  TestGetir() {
    this.testService.getTests().subscribe((rv) => {
      this.allNotes = rv;
    });
  }

  ArananiGetir() {
    this.testService.getArananiGetir(this.arananacakDeger).subscribe((rv) => {
      this.allNotes = rv;
    });
  }
  TestKaydet() {
    this.testService.addKullanici(this.kullanici);
  }

  Sil(id: string) {
    this.testService.deleteKullanici(id);
  }
  Duzenle(kul: any, id: string) {
    var dKul: Kullanici = new Kullanici();
    dKul.ad = kul.payload.doc.data().ad;
    dKul.soyad = kul.payload.doc.data().soyad;
    dKul.kullaniciAdi = kul.payload.doc.data().kullaniciAdi+"Duzenlendi";
    dKul.parola = kul.payload.doc.data().parola;
    dKul.eposta = kul.payload.doc.data().eposta;
    console.log(dKul);
    console.log(id);
    this.testService.updateKullanici(dKul, id);
  }
}
