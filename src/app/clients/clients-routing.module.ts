import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientsComponent } from './pages/clients/clients.component';
import { DetailClientComponent } from './pages/detail-client/detail-client.component';
import { AuthGuard } from './guards/auth.guard';

// Import your components here
// import { HomeComponent } from './home.component';
// import { AboutComponent } from './about.component';
// import { ContactComponent } from './contact.component';

const routes: Routes = [
   
        {
            path: '',
            component: ClientsComponent,
        },
        {
            path: 'detail',
            component: DetailClientComponent,
            canActivate: [AuthGuard] 
        }
   
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ClientsRoutingModule { }