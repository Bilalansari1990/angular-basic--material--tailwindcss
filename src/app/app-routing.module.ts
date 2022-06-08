import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  {
    path: 'crypto/:id',
    loadChildren: () =>
      import('./crypto-details/crypto-details.module').then(
        (m) => m.CryptoDetailsModule
      ),
  },
  {
    path: 'userForm',
    loadChildren: () =>
      import('./user-form/user-form.module').then((m) => m.UserFormModule),
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'testing',
    loadChildren: () =>
      import('./testing/testing.module').then((m) => m.TestingModule),
  },
  {
    path: 'practice',
    loadChildren: () =>
      import('./practice/practice.module').then((m) => m.PracticeModule),
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
