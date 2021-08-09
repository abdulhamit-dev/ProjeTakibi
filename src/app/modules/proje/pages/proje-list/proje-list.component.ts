import { Component, OnInit } from '@angular/core';
import { Proje } from 'src/app/core/models/proje';
import { ProjeHareket } from 'src/app/core/models/projeHareket';
import { ProjeHareketService } from 'src/app/core/services/proje-hareket.service';
import { ProjeService } from 'src/app/core/services/proje.service';

@Component({
  selector: 'app-proje-list',
  templateUrl: './proje-list.component.html',
  styleUrls: ['./proje-list.component.css']
})
export class ProjeListComponent implements OnInit {

  constructor(private projeService:ProjeService,private projeHareketService:ProjeHareketService) { }
  projeList:Proje[]=[];
  selectProje:Proje=new Proje();
  projeHareketList:ProjeHareket[]=[];
  ngOnInit(): void {
    this.ProjeList()
  
  }

  ProjeList() {
    this.projeService.ProjeList().subscribe((rv) => {
      this.projeList = rv.map((p) => {
        const data = p.payload.doc.data() as Proje;
        data.id = p.payload.doc.id;
        return data;
      })
    });
  }

  ProjeHareketList(proje:Proje){
    this.projeHareketService.ProjeHareketList().subscribe(rv=>{
      this.projeHareketList=rv.filter(x=>x.projeId==proje.id)
    })
  }
}
