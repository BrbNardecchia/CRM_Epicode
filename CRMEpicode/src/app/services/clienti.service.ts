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

  getPercentualiTipiClienti(){
    let percentuali:number[]= []
    let milleClienti;
    this.http.get<IObjClienti>(environment.serverAddress + 'api/clienti?page=0&size=6000')
    .subscribe(resp => {
      milleClienti = resp.content;
      let srl = milleClienti.filter(element => element.tipoCliente === 'SRL');
      let spa = milleClienti.filter(element => element.tipoCliente === 'SPA');
      let sas = milleClienti.filter(element => element.tipoCliente === 'SAS');
      let pa = milleClienti.filter(element => element.tipoCliente === 'PA');
      percentuali.push(srl.length, spa.length, sas.length, pa.length)
      console.log(percentuali)
    });
    return percentuali
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

  getClientiByMoneybet(){
    return this.http.get<IObjClienti>(this.urlAPI + 'fatturatoannuale?from=0&to=100000000&size=1');
  }

  getClientiByDataInsbet(data1: string, data2: string){
    return this.http.get<IObjClienti>(this.urlAPI + 'datainserimento?from=' + data1 + '&to=' + data2);
  }

  getClientiByDataContbet(data1: string, data2: string){
    return this.http.get<IObjClienti>(this.urlAPI + 'datainserimento?from=' + data1 + '&to=' + data2);
  }

  getClientiByRagSoc(element : string){
    return this.http.get<IObjClienti>(this.urlAPI + 'ragionesociale?nome=' + element);
  }

  findClientebyElement(params: any){
    return this.http.post<IObjClienti>(this.urlAPI + 'find', params)
  }






}
