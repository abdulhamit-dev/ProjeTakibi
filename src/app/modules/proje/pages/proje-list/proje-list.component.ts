import { Component, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { Gorev } from 'src/app/core/models/gorev';
import { Proje } from 'src/app/core/models/proje';
import { ProjeHareket } from 'src/app/core/models/projeHareket';
import { GorevService } from 'src/app/core/services/gorev.service';
import { ProjeHareketService } from 'src/app/core/services/proje-hareket.service';
import { ProjeService } from 'src/app/core/services/proje.service';

@Component({
  selector: 'app-proje-list',
  templateUrl: './proje-list.component.html',
  styleUrls: ['./proje-list.component.css'],
})
export class ProjeListComponent implements OnInit {
  constructor(
    private projeService: ProjeService,
    private projeHareketService: ProjeHareketService,
    private gorevService: GorevService
  ) {}
  projeList: Proje[] = [];
  selectProje: Proje = new Proje();
  projeHareketList: ProjeHareket[] = [];
  gorev: Gorev = new Gorev();
  gorevList: Gorev[] = [];
  selectGorev!: Gorev[];
  beklemede: boolean = false;

  durumList: Durum[] = [
    { ad: 'Tümü', deger: 10 },
    { ad: 'Beklemede', deger: 0 },
    { ad: 'Tamamlandı', deger: 1 },
  ];
  selectDurum: Durum = new Durum();

  ngOnInit(): void {
    this.ProjeList();
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

      if (this.selectDurum.deger == 0) durum = false;
      else if (this.selectDurum.deger == 1) durum = true;

      if (this.selectDurum.deger != 10) {
        this.gorevList = rv
          .map((p) => {
            const data = p.payload.doc.data() as Gorev;
            data.id = p.payload.doc.id;
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
            const data = p.payload.doc.data() as Gorev;
            data.id = p.payload.doc.id;
            return data;
          })
          .filter((x) => x.projeId == proje.id)
          .sort((a, b) => {
            return +a.islemTarihi - +b.islemTarihi;
          });
      }
    });
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
    this.gorev.islemTarihi = new Date();
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
