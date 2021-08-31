import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { Kullanici } from 'src/app/core/models/kullanici';
import { Proje } from 'src/app/core/models/proje';
import { KullaniciService } from 'src/app/core/services/kullanici.service';
import { ProjeService } from 'src/app/core/services/proje.service';
import {NzMessageService} from 'ng-zorro-antd/message'

@Component({
  selector: 'app-proje-duzenle',
  templateUrl: './proje-duzenle.component.html',
  styleUrls: ['./proje-duzenle.component.css'],
})
export class ProjeDuzenleComponent implements OnInit {
  constructor(
    private projeService: ProjeService,
    private kullaniciService:KullaniciService,
    private confirmationService: ConfirmationService
  ) {}
  proje: Proje = new Proje();
  projeList: Proje[] = [];
  selectProje: Proje = new Proje();
  displayModal: boolean=false;
  kullaniciList:Kullanici[]=[];

  ngOnInit(): void {
    this.ProjeList();
    //
  }

  ProjeList() {
    this.projeService.List('proje').subscribe((rv) => {
      this.projeList = rv.map((p) => {
        const data = p.payload.doc.data() as Proje;
        data.id = p.payload.doc.id;
        return data;
      })
    });
  }
  // Test(){
  //   this.projeService.Test().subscribe(x=>{
  //     console.log(x);
  //   })
  // }

  AddProje() {
    this.proje.olusturanKullaniciId = localStorage.getItem(
      'kullaniciId'
    ) as string;
    this.proje.olusturmaTarihi = new Date().toLocaleString();
    this.projeService.Add(this.proje,'proje');
  }

  UpdateProje() {

    
    console.log(this.selectProje)
    this.selectProje.ad = (<HTMLInputElement>(
      document.getElementById('txtAd')
    )).value;
    this.selectProje.aciklama = (<HTMLInputElement>(
      document.getElementById('txtAciklama')
    )).value;

    

    this.projeService.Update(this.selectProje,this.selectProje.id,'proje');
    this.displayModal = false;
  }

  DeleteProje(event: Event, proje: Proje) {
    this.projeService.Delete(proje.id,'proje');
  }
  Vazgec(): void {

  }

  ShowModalDialog(proje: Proje) {
    this.selectProje = proje;
    this.displayModal = true;
  }


 
  ModalVazgec(): void {
    this.displayModal = false;
  }




}
