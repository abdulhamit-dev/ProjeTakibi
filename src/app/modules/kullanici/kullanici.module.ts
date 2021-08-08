import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KullaniciRoutingModule } from './kullanici-routing.module';
import { ListComponent } from './pages/list/list.component';
import { PrimengModule } from '../primeng/primeng.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    KullaniciRoutingModule,
    PrimengModule,
    FormsModule
  ]
})
export class KullaniciModule { }
