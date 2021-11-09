import { HttpClient } from '@angular/common/http';
import { IObjClienti } from '../interfaces/Iobj_clienti';
import { Injectable, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IClienti } from '../interfaces/iclienti';

@Injectable({
  providedIn: 'root'
})

export class ClientiService {

  urlAPI = environment.serverAddress + 'api/clienti';

  constructor(public http: HttpClient) {}

  getAllClient() {
    return this.http.get<IObjClienti>(this.urlAPI + '?page=0&size=20&sort=id,ASC');
  }

  createCliente(nuovoCliente: IClienti){
    return this.http.post(this.urlAPI, nuovoCliente)
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


}
