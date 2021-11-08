import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IClienti } from '../interfaces/iclienti';
import { AllObj } from './../interfaces/all-obj';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})

export class ClientiService {

  urlAPI = environment.serverAddress + 'api/clienti';
  // headers = new HttpHeaders();
  // bearerAuth = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTYzNjM3OTYxNywiZXhwIjoxNjM3MjQzNjE3fQ.wXwJgdHRzf-03lmnIy-Vcg5D3pY9dNTnl5eyhOyAkCJQnGOm498D0ZcdkLXN8HCksmxlrBTRcBcL4ELu-9303Q'
  // tenantId='fe_0421'

  constructor(public http: HttpClient) {}
  //   this.headers = this.headers
  //     .set('Authorization', 'Bearer ' + this.bearerAuth)
  //     .set('X-TENANT-ID', this.tenantId);
  // }
  // return this.http.get<IClienti[]>(this.urlAPI + '?page=0&size=20&sort=id,ASC', {headers: this.headers});


  getAllClient() {
    return this.http.get<AllObj>(this.urlAPI + '?page=0&size=20&sort=id,ASC');
  }

  // getTipiCliente(){
  //   return this.http.get<string[]>(this.serverAddress + 'tipicliente');
  // }

  // getClienteById(id: number){
  //   return this.http.get<IClienti>(this.serverAddress + id);
  // }

  // getClientiByMoneybet(value1: number, value2: number){
  //   return this.http.get<IClienti[]>(this.serverAddress + 'fatturatoannuale?from=' + value1 + '&to=' + value2);
  // }

  // getClientiByDataInsbet(data1: string, data2: string){
  //   return this.http.get<IClienti[]>(this.serverAddress + 'datainserimento?from=' + data1 + '&to=' + data2);
  // }

  // getClientiByDataContbet(data1: string, data2: string){
  //   return this.http.get<IClienti[]>(this.serverAddress + 'datainserimento?from=' + data1 + '&to=' + data2);
  // }

  // getClientiByRagSoc(element : string){
  //   return this.http.get<IClienti[]>(this.serverAddress + 'ragionesociale?nome=' + element);
  // }

  // deleteClienteById(id: number){
  //   return this.http.delete(this.serverAddress + id);
  // }

  // updateClienteById(modificheCliente: IClienti){
  //   return this.http.put(this.serverAddress + modificheCliente.id, modificheCliente);
  // }

  // createCliente(nuovoCliente: IClienti){
  //   return this.http.post(this.serverAddress, nuovoCliente)
  // }
}
