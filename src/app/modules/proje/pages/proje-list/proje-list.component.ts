import { Component, OnInit } from '@angular/core';
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
  gorevList:Gorev[]=[];
  selectGorev!:Gorev[];
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
    this.gorevService.Listv2('gorev').subscribe((rv) => {
      this.gorevList = rv.filter((x) => x.projeId == proje.id);
    });
  }

  GorevDurumuDegistir(gorev:Gorev){
    console.log(gorev)
  }

  GorevEkle() {
    console.log(this.gorev.yapilacakIsAciklama);

    this.gorev.atananKullaniciId = localStorage.getItem('kullaniciId') as string;
    this.gorev.atayanKullaniciId = localStorage.getItem('kullaniciId') as string;
    this.gorev.projeId = this.selectProje.id;
    this.gorev.islemTarihi = new Date().toLocaleString();
    this.gorev.yapilmaDurumu = 'Beklemede';

    this.gorevService.Add(this.gorev, 'gorev');
    this.gorev.yapilacakIsAciklama="";
  }
}
