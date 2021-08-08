import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Kullanici } from '../models/kullanici';
import { KullaniciService } from './kullanici.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private kullaniciService:KullaniciService) { }

  GirisKontrol(kullaniciAdi:string,parola:string){
   return this.kullaniciService.KullaniciGetir(kullaniciAdi,parola)
  }
}
