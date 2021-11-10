import { HttpClient } from '@angular/common/http';
import { IFatture } from '../interfaces/ifatture';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IObjFatture } from '../interfaces/iobj-fatture';

@Injectable({
  providedIn: 'root'
})
export class FattureService {
  urlAPI = environment.serverAddress + 'api/fatture/';
  
  constructor(public http: HttpClient) { }

  getAllFatture() {
    return this.http.get<IObjFatture>(environment.serverAddress + 'api/fatture?page=0&size=20&sort=id,ASC');
  }

  getFattureByClient(id: number){
    return this.http.get<IObjFatture>(this.urlAPI + 'cliente/'+ id + '?page=0&size=20&sort=id,ASC');
  }

  getFatturaById(id: number){
    return this.http.get<IFatture>(this.urlAPI + id);
  }

  getFatturaByAnno(anno: string){
    return this.http.get<IFatture>(this.urlAPI+ 'anno/?anno=' + anno + '&page=0&size=20&sort=id,ASC');
  }

  getFatturaByDataBet(data1: string, data2: string){
    return this.http.get<IFatture>(this.urlAPI + 'data/?from=' + data1 + '&to=' + data2 + '&page=0&size=20&sort=id,DESC' );
  }

  getFatturaByIdImpBet(value1: number, value2: number){
    return this.http.get<IFatture>(this.urlAPI + 'importo/?from=' + value1 + '&to=' + value2 + '&page=0&size=20&sort=id,DESC' );
  }

  createFattura(nuovoFattura: IFatture){
    return this.http.post(this.urlAPI, nuovoFattura)
  }

  deleteFatture(id: number) {
    return this.http.delete(this.urlAPI + id);
  }

  updateFatturaById(modificheFattura: any){
    return this.http.put(this.urlAPI + modificheFattura.id, modificheFattura);
  }
}
