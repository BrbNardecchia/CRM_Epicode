import { HttpClient } from '@angular/common/http';
import { IObjClienti } from '../interfaces/Iobj_clienti';
import { Injectable, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IClienti } from '../interfaces/iclienti';

@Injectable({
  providedIn: 'root'
})

export class ClientiService {

  urlAPI = environment.serverAddress + 'api/clienti/';

  constructor(public http: HttpClient) { }

  getAllClient() {
    return this.http.get<IObjClienti>(environment.serverAddress + 'api/clienti?page=0&size=100&sort=id,DESC');
  }

  getClienteById(id: number){
    return this.http.get<IClienti>(this.urlAPI + id);
  }

  createCliente(nuovoCliente: IClienti) {
    return this.http.post(this.urlAPI, nuovoCliente)
  }

  getTipiCliente() {
    return this.http.get<string[]>(this.urlAPI + 'tipicliente');
  }

  deleteClienteById(id: number) {
    return this.http.delete(this.urlAPI + id);
  }

  updateClienteById(modificheCliente: IClienti){
    return this.http.put(this.urlAPI + modificheCliente.id, modificheCliente);
  }

  getClientiByMoneybet(value1: number, value2: number){
    return this.http.get<IClienti[]>(this.urlAPI + 'fatturatoannuale?from=' + value1 + '&to=' + value2);
  }

  getClientiByDataInsbet(data1: string, data2: string){
    return this.http.get<IClienti[]>(this.urlAPI + 'datainserimento?from=' + data1 + '&to=' + data2);
  }

  getClientiByDataContbet(data1: string, data2: string){
    return this.http.get<IClienti[]>(this.urlAPI + 'datainserimento?from=' + data1 + '&to=' + data2);
  }

  getClientiByRagSoc(element : string){
    return this.http.get<IClienti[]>(this.urlAPI + 'ragionesociale?nome=' + element);
  }






}
