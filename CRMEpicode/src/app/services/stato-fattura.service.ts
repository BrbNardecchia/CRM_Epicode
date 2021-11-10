import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IStatoFatture} from '../interfaces/istato-fatture'
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IObjStatoFatture } from '../interfaces/iobj-stato-fatture';

@Injectable({
  providedIn: 'root'
})
export class StatoFatturaService {

  private urlAPI = environment.serverAddress + 'api/statifattura/';
  
  
  constructor(public http: HttpClient) {
  }

  getAllStatiFatture() {
    return this.http.get<IObjStatoFatture>(environment.serverAddress + 'api/statifattura?page=0&size=20&sort=id,ASC');
  }

  getStatoFatturaById(id: number){
    return this.http.get<IStatoFatture>(this.urlAPI + id);
  }

  deleteStatoFatturaById(id: number){
    return this.http.delete(this.urlAPI + id);
  }

  updateStatoFatturaById(modificheStatoFattura: IStatoFatture){
    return this.http.put(this.urlAPI + modificheStatoFattura.id, modificheStatoFattura);
  }

  createStatoFattura(nuovoStatoFattura: IStatoFatture){
    return this.http.post(this.urlAPI , nuovoStatoFattura);
  }
}
