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
    this.gorevService.List('gorev').subscribe((rv) => {
      this.gorevList=rv.map((p)=>{
        const data=p.payload.doc.data() as Gorev;
        data.id=p.payload.doc.id;
        return data;
      }).filter(x=>x.projeId==proje.id)
      .sort((a,b)=>{
        return +a.islemTarihi - +b.islemTarihi;
      });
    })

  }

  GorevDurumuDegistir(gorev:Gorev){
    this.gorevService.Update(gorev,gorev.id,"gorev")
  }

  GorevSil(gorev:Gorev){
    this.gorevService.Delete(gorev.id,"gorev");
  }

  GorevEkle() {
    console.log(this.gorev.yapilacakIsAciklama);
    this.gorev.atananKullaniciId = localStorage.getItem('kullaniciId') as string;
    this.gorev.atayanKullaniciId = localStorage.getItem('kullaniciId') as string;
    this.gorev.projeId = this.selectProje.id;
    this.gorev.islemTarihi = new Date();
    this.gorev.yapilmaDurumu = false;
    this.gorevService.Add(this.gorev, 'gorev');
    this.gorev.yapilacakIsAciklama="";
  }

  GorevAciklamaDuzenle(gorev:Gorev,aciklama:string){
    if(gorev.yapilacakIsAciklama!=aciklama){
      gorev.yapilacakIsAciklama=aciklama;
      this.gorevService.Update(gorev,gorev.id,"gorev")
    }
  }
}
