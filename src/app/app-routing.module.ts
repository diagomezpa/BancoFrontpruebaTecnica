import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailClientComponent } from './clients/pages/detail-client/detail-client.component';
import { ClientsComponent } from './clients/pages/clients/clients.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('../app/clients/clients.module').then((m) => m.ClientsModule),
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
