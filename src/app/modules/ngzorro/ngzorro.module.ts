import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzTableModule } from 'ng-zorro-antd/table';
import { IconDefinition } from '@ant-design/icons-angular';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzSelectModule } from 'ng-zorro-antd/select';

import * as AllIcons from '@ant-design/icons-angular/icons';

import { NzIconModule, NZ_ICONS } from 'ng-zorro-antd/icon';
const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};

const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => {
  const i = antDesignIcons[key];
  return i;
});
@NgModule({
  declarations: [],
  imports:[CommonModule],
  exports:[
    NzButtonModule,
    NzCardModule,
    NzGridModule,
    NzLayoutModule,
    NzInputModule,
    NzSpaceModule,
    NzMenuModule,
    NzIconModule,
    NzTableModule,
    NzPopconfirmModule,
    NzPopoverModule,
    NzModalModule,
    NzListModule,
    NzCheckboxModule,
    NzSelectModule
  ],providers: [
    {
      provide: NZ_ICONS,
      useValue: icons
    }
  ]
})
export class NgZorroModule { }
