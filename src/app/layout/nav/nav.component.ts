import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  constructor() {}
  items!: MenuItem[];
  splintItems!: MenuItem[];
  kullaniciAdi!:string;
  ngOnInit(): void {
    this.MenuBarItems();
    this.SplintItems();
    var kullaniciAdi=localStorage.getItem("kullaniciAdi")!.toString()
    this.kullaniciAdi=kullaniciAdi;
  }

  MenuBarItems() {
    this.items = [
      { label: 'Kullanıcı Listesi', routerLink: 'kullanici/list' },
      { label: 'Test',routerLink:'/test' },
      { label: 'İnfertilite' },
      { label: 'KOH(siklus)' },
      { label: 'Gebelik' },
      { label: 'Jin. Muayene' },
      { label: 'Siklus İptalleri', routerLink: 'cancellist' },
      {
        label: 'File',
        items: [
          {
            label: 'New',
            icon: 'pi pi-fw pi-plus',
            items: [{ label: 'Project' }, { label: 'Other' }],
          },
          { label: 'Open' },
          { label: 'Quit' },
        ],
      },
      {
        label: 'Edit',
        icon: 'pi pi-fw pi-pencil',
        items: [
          { label: 'Delete', icon: 'pi pi-fw pi-trash' },
          { label: 'Refresh', icon: 'pi pi-fw pi-refresh' },
        ],
      },
    ];
  }

  SplintItems() {
    this.splintItems = [
      { label: 'Ayarlar', icon: 'pi pi-cog' },
      { separator: true },
      { label: 'Çıkış', icon: 'pi pi-login', routerLink: ['auth/login'],command:this.LogOut },
    ];
  }

  LogOut(){
   
    localStorage.setItem("kullaniciAdi","")
    console.log(localStorage.getItem("kullaniciAdi")+"_deneme")
  }
}
