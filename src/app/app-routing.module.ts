import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './layout/content/content.component';
import { ListComponent } from './modules/kullanici/pages/list/list.component';

import { TestComponent } from './test/test.component';

const routes: Routes = [
 
  {
    path: '',
    component: ContentComponent,
    children: [
      {
        path: 'kullanici',
        children: [{ path: 'list', component: ListComponent }],
      },
      {path:'test',component:TestComponent}
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
