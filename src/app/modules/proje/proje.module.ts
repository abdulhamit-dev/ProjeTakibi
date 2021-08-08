import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjeRoutingModule } from './proje-routing.module';
import { ProjeListComponent } from './pages/proje-list/proje-list.component';
import { FormsModule } from '@angular/forms';
import { PrimengModule } from '../primeng/primeng.module';
import { ProjeDuzenleComponent } from './pages/proje-duzenle/proje-duzenle.component';


@NgModule({
  declarations: [
    ProjeListComponent,
    ProjeDuzenleComponent
  ],
  imports: [
    CommonModule,
    ProjeRoutingModule,
    FormsModule,
    PrimengModule
  ]
})
export class ProjeModule { }
