import { Component, OnInit } from '@angular/core';
import { client } from '../../interfaces/clients';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-detail-client',
  templateUrl: './detail-client.component.html',
  styleUrl: './detail-client.component.css'
})
export class DetailClientComponent implements OnInit{

  client: client | undefined;
  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.client = this.clientService.getClient();
  }

  

}
