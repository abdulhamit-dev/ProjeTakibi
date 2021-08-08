import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    var kulAdi = localStorage.getItem('kullaniciAdi');
    console.log(kulAdi);
    if (kulAdi == null || kulAdi == '' || kulAdi == undefined) {
      this.router.navigateByUrl('/auth/login');
      return false;
    } else {
      return true;
    }
  }
}
