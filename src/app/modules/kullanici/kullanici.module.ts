import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KullaniciRoutingModule } from './kullanici-routing.module';
import { ListComponent } from './pages/list/list.component';
import { PrimengModule } from '../primeng/primeng.module';


@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    KullaniciRoutingModule,
    PrimengModule
  ]
})
export class KullaniciModule { }
