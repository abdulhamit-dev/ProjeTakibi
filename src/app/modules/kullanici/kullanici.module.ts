import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KullaniciRoutingModule } from './kullanici-routing.module';
import { ListComponent } from './pages/list/list.component';
import { FormsModule } from '@angular/forms';
import { NgZorroModule } from '../ngzorro/ngzorro.module';



@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    KullaniciRoutingModule,
    FormsModule,
    NgZorroModule
  ]
})
export class KullaniciModule { }
