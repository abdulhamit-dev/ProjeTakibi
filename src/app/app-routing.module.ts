import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './core/guard/auth-guard.service';
import { ContentComponent } from './layout/content/content.component';
import { LoginComponent } from './modules/auth/pages/login/login.component';
import { ListComponent } from './modules/kullanici/pages/list/list.component';
import { ProjeDuzenleComponent } from './modules/proje/pages/proje-duzenle/proje-duzenle.component';
import { ProjeListComponent } from './modules/proje/pages/proje-list/proje-list.component';

import { TestComponent } from './test/test.component';

const routes: Routes = [
  {
    path: '',
    component: ContentComponent,
    canActivate: [AuthGuardService],
    children: [
      {
        path: 'kullanici',
        children: [
          {
            path: 'list',
            component: ListComponent,
            canActivate: [AuthGuardService],
          },
        ],
      },
      {
        path: 'proje',
        children: [
          {
            path: 'list',
            component: ProjeListComponent,
            canActivate: [AuthGuardService],
          },
          {
            path: 'duzenle',
            component: ProjeDuzenleComponent,
            canActivate: [AuthGuardService],
          },
        ],
      },
      {
        path: 'test',
        component: TestComponent,
        canActivate: [AuthGuardService],
      },
    ],
  },
  {
    path: 'auth',
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
