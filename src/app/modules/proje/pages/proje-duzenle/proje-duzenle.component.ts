import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { Proje } from 'src/app/core/models/proje';
import { ProjeService } from 'src/app/core/services/proje.service';

@Component({
  selector: 'app-proje-duzenle',
  templateUrl: './proje-duzenle.component.html',
  styleUrls: ['./proje-duzenle.component.css'],
})
export class ProjeDuzenleComponent implements OnInit {
  constructor(
    private projeService: ProjeService,
    private confirmationService: ConfirmationService
  ) {}
  proje: Proje = new Proje();
  projeList: Proje[] = [];
  selectProje: Proje = new Proje();
  displayModal!: boolean;
  ngOnInit(): void {
    this.ProjeList();
  }

  ProjeList() {
    this.projeService.ProjeList().subscribe((rv) => {
      this.projeList = rv.map((p) => {
        const data = p.payload.doc.data() as Proje;
        data.id = p.payload.doc.id;
        return data;
      });
    });
  }

  AddProje() {
    this.proje.olusturanKullaniciId = localStorage.getItem(
      'kullaniciId'
    ) as string;
    this.proje.olusturmaTarihi = new Date().toLocaleString();
    this.projeService.AddProje(this.proje);
  }

  UpdateProje() {
    this.selectProje.ad = (<HTMLInputElement>(
      document.getElementById('txtAd')
    )).value;
    this.selectProje.ad = (<HTMLInputElement>(
      document.getElementById('txtAciklama')
    )).value;
    this.projeService.UpdateProje(this.selectProje);
    this.displayModal = false;
  }

  DeleteProje(event: Event, proje: Proje) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: this.proje.ad + ' adlı kayıt silinsin mi?',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Evet',
      rejectLabel: 'Hayır',
      accept: () => {
        this.projeService.DeleteProje(proje.id);
      },
      reject: () => {
        //reject action
      },
    });
  }

  ShowModalDialog(proje: Proje) {
    this.selectProje = proje;
    this.displayModal = true;
  }
}
