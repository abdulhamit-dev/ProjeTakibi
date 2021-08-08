import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Kullanici } from 'src/app/core/models/kullanici';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }
kullanici:Kullanici=new Kullanici();
  ngOnInit(): void {
  }

  Giris(){
      if(this.kullanici.kullaniciAdi!="" && this.kullanici.parola!=""){
        localStorage.setItem('kullaniciAdi',this.kullanici.kullaniciAdi)
this.router.navigateByUrl("");
      }
  }

}
