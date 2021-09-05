import { Component, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { Timestamp } from 'rxjs/internal/operators/timestamp';
import { GorevDto } from 'src/app/core/models/dtos/gorevDto';
import { Gorev } from 'src/app/core/models/gorev';
import { Kullanici } from 'src/app/core/models/kullanici';
import { Proje } from 'src/app/core/models/proje';
import { GorevService } from 'src/app/core/services/gorev.service';
import { KullaniciService } from 'src/app/core/services/kullanici.service';
import { ProjeService } from 'src/app/core/services/proje.service';


@Component({
  selector: 'app-proje-list',
  templateUrl: './proje-list.component.html',
  styleUrls: ['./proje-list.component.css'],
})
export class ProjeListComponent implements OnInit {
  constructor(
    private projeService: ProjeService,
    private gorevService: GorevService,
    private kullaniciService:KullaniciService
  ) {}
  projeList: Proje[] = [];
  selectProje: Proje = new Proje();
  gorev: Gorev = new Gorev();
  gorevList: GorevDto[] = [];
  selectGorev!: Gorev[];
  beklemede: boolean = false;
  kullaniciList:Kullanici[]=[];

  durumList: Durum[] = [
    { ad: 'Tümü', deger: 10 },
    { ad: 'Beklemede', deger: 0 },
    { ad: 'Tamamlandı', deger: 1 },
  ];
  selectDurum: Durum = new Durum();

  ngOnInit(): void {
    this.ProjeList();

    this.kullaniciService.List('kullanici').subscribe(rv=>{
      this.kullaniciList=rv.map(p=>{
        const data=p.payload.doc.data() as Kullanici;
        data.id = p.payload.doc.id;
        return data;
      });
    })

    this.selectDurum.deger=10;
  }

  ProjeList() {
    this.projeService.List('proje').subscribe((rv) => {
      this.projeList = rv.map((p) => {
        const data = p.payload.doc.data() as Proje;
        data.id = p.payload.doc.id;
        return data;
      });
    });
  }

  ProjeGorevList(proje: Proje) {
    this.gorevService.ProjeGorevListesi(proje).subscribe((rv) => {
      var durum = false;
      this.selectProje=proje;

      if (this.selectDurum.deger == 0) durum = false;
      else if (this.selectDurum.deger == 1) durum = true;

      if (this.selectDurum.deger != 10) {
        this.gorevList = rv
          .map((p) => {
            var data = p.payload.doc.data() as GorevDto;
            data.id=p.payload.doc.id;

            data.atananKullaniciAdi=this.kullaniciList.find(x=>x.id==data.atananKullaniciId)?.kullaniciAdi
            return data;
          })
          .filter((x) => x.projeId == proje.id)
          .filter((x) => x.yapilmaDurumu == durum)
          .sort((a, b) => {
            return +a.islemTarihi - +b.islemTarihi;
          });
      } else {
        this.gorevList = rv
          .map((p) => {

            var data = p.payload.doc.data() as GorevDto;
            data.id=p.payload.doc.id;
            data.atananKullaniciAdi=this.kullaniciList.find(x=>x.id==data.atananKullaniciId)?.kullaniciAdi
            return data;
          })
          .filter((x) => x.projeId == proje.id)
          .sort((a, b) => {
            return +a.islemTarihi - +b.islemTarihi;
          });
      }
    });
    console.log(this.gorevList)
  }

  GorevDurumuDegistir(gorev: Gorev) {
    this.gorevService.Update(gorev, gorev.id, 'gorev');
  }

  GorevSil(gorev: Gorev) {
    this.gorevService.Delete(gorev.id, 'gorev');
  }

  GorevEkle() {
    this.gorev.atananKullaniciId = localStorage.getItem(
      'kullaniciId'
    ) as string;
    this.gorev.atayanKullaniciId = localStorage.getItem(
      'kullaniciId'
    ) as string;
    this.gorev.projeId = this.selectProje.id;
    this.gorev.islemTarihi = new Date().toLocaleString();
    this.gorev.yapilmaDurumu = false;

    this.gorevService.Add(this.gorev, 'gorev');
    this.gorev.yapilacakIsAciklama = '';
  }

  GorevAciklamaDuzenle(gorev: Gorev, aciklama: string) {
    if (gorev.yapilacakIsAciklama != aciklama) {
      gorev.yapilacakIsAciklama = aciklama;
      this.gorevService.Update(gorev, gorev.id, 'gorev');
    }
  }

  BeklemedeOlanlar() {
    this.ProjeGorevList(this.selectProje);
  }
}

export class Durum {
  deger!: number;
  ad!: string;
}
