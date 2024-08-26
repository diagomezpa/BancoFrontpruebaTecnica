import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailClientComponent } from './pages/detail-client/detail-client.component';
import { ClientsComponent } from './pages/clients/clients.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ClientsRoutingModule } from './clients-routing.module';



@NgModule({
  declarations: [
    // Add the ClientsComponent to the declarations array

    ClientsComponent,
    DetailClientComponent,
  ],
  imports: [
    ReactiveFormsModule,
    ClientsRoutingModule,
    CommonModule
  ]
})
export class ClientsModule { }
