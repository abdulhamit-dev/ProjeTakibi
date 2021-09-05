import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjeRoutingModule } from './proje-routing.module';
import { ProjeListComponent } from './pages/proje-list/proje-list.component';
import { FormsModule } from '@angular/forms';
import { ProjeDuzenleComponent } from './pages/proje-duzenle/proje-duzenle.component';
import { NgZorroModule } from '../ngzorro/ngzorro.module';


@NgModule({
  declarations: [
    ProjeListComponent,
    ProjeDuzenleComponent
  ],
  imports: [
    CommonModule,
    ProjeRoutingModule,
    FormsModule,
    NgZorroModule
  ]
})
export class ProjeModule { }
