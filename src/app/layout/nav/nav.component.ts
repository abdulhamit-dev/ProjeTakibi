import { Component, OnInit } from '@angular/core';
import { Kullanici } from 'src/app/core/models/kullanici';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  constructor() {}
  kullaniciAdi!: string;
  kullanici: Kullanici = new Kullanici();

  ngOnInit(): void {
    this.AktifKullanici();

  }

  AktifKullanici() {
    this.kullanici = JSON.parse(
      localStorage.getItem('kullanici')!
    ) as Kullanici;
  }





  LogOut() {
    localStorage.setItem('kullaniciAdi', '');
    console.log(localStorage.getItem('kullaniciAdi') + '_deneme');
  }
}
