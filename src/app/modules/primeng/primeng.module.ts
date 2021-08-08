import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ToastModule } from 'primeng/toast';
import { DividerModule } from 'primeng/divider';
import {CalendarModule} from 'primeng/calendar';
import {DialogModule} from 'primeng/dialog';
import {ConfirmPopupModule} from 'primeng/confirmpopup';
import {ConfirmationService} from 'primeng/api';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports:[
    DropdownModule,
    InputTextModule,
    MenubarModule,
    ButtonModule,
    CheckboxModule,
    TableModule,
    CardModule,
    SplitButtonModule,
    ToastModule,
    DividerModule,
    CalendarModule,
    DialogModule,
    ConfirmPopupModule
  ],
  providers:[ConfirmationService]
})
export class PrimengModule { }
