import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Kullanici } from 'src/app/core/models/kullanici';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private authService: AuthService) {}
  kullanici: Kullanici = new Kullanici();
  rvKul: Kullanici = new Kullanici();
  ngOnInit(): void {
    localStorage.removeItem('kullanici');
    localStorage.removeItem('kullaniciId');
  }

  Giris() {
    let kullaniciAdi = this.kullanici.kullaniciAdi;
    let parola = this.kullanici.parola;
    if (kullaniciAdi === undefined || kullaniciAdi == '') {
      alert('Kullanıcı adı girmediniz');
    } else {
      if (parola === undefined || parola == '') {
        alert('Parola girmediniz');
      } else {
        this.authService
          .GirisKontrol(this.kullanici.kullaniciAdi, this.kullanici.parola)
          .subscribe((rv) => {
            if (rv.length > 0) {
              rv.forEach((data) => {
                this.rvKul=data.payload.doc.data() as Kullanici
                this.rvKul.id=data.payload.doc.id
                
                if(this.rvKul.id.length>0){
                  localStorage.setItem('kullaniciId',this.rvKul.id)
                  localStorage.setItem('kullanici',JSON.stringify(data.payload.doc.data()));
                  this.router.navigateByUrl('')
                }
              });
            } else {
              alert('Kullanıcı bulunamadı');
            }
          });
      }
    }
   
  }
}
