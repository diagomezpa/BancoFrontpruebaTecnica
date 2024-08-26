import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { client } from '../interfaces/clients';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
    //private apiUrl: string = 'http://localhost:4000/api/clientes?documentType=C&documentNumber=23445322';

    private apiUrl: string = 'http://localhost:4000';
    private client?: client;
    constructor(private http: HttpClient) { }

    // get de un cliente por tipo de documento Cedula = C o pasaporte = P y numero de documento
    getClientByDocument(type: string, document: string):Observable<client> {
        return this.http.get<client>(`http://localhost:4000/api/clientes?documentType=${type}&documentNumber=${document}`).pipe(
          tap(client => this.client = client)
        ); 

    
    }

    getClient(): client | undefined {
        return this.client;
    }


}
