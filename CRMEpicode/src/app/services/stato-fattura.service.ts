import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IStatoFatture} from '../interfaces/istato-fatture'
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StatoFatturaService {

  private urlAPI = environment.serverAddress + 'api/statifattura/';
  
  headers = new HttpHeaders();
  bearerAuth = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTYzNjM3OTYxNywiZXhwIjoxNjM3MjQzNjE3fQ.wXwJgdHRzf-03lmnIy-Vcg5D3pY9dNTnl5eyhOyAkCJQnGOm498D0ZcdkLXN8HCksmxlrBTRcBcL4ELu-9303Q'
  tenantId='fe_0421'
  
  constructor(public http: HttpClient) {
    this.headers = this.headers
      .set('Authorization', this.bearerAuth)
      .set('X-TENANT-ID', this.tenantId);
  }

  getAllStatiFatture() {
    return this.http.get<IStatoFatture[]>(environment.serverAddress + 'api/statifattura?page=0&size=20&sort=id,ASC', {headers: this.headers});
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
