import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  
} from '@angular/router';
import { Observable } from 'rxjs';
import { Kullanici } from '../models/kullanici';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  constructor(private router: Router) {}
  kullanici:Kullanici=new Kullanici();
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    
    this.kullanici=JSON.parse(localStorage.getItem("kullanici")!) as Kullanici;
    console.log(this.kullanici)

    if(this.kullanici!=null){
      return true;
    }else{
      this.router.navigateByUrl('auth/login')
      return false;
    }
  }
}
