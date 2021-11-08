import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IComuni } from '../interfaces/icomuni';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ComuniService {

  private urlAPI = environment.serverAddress + 'api/comuni/';
  
  headers = new HttpHeaders();
  bearerAuth = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTYzNjM3OTYxNywiZXhwIjoxNjM3MjQzNjE3fQ.wXwJgdHRzf-03lmnIy-Vcg5D3pY9dNTnl5eyhOyAkCJQnGOm498D0ZcdkLXN8HCksmxlrBTRcBcL4ELu-9303Q'
  tenantId='fe_0421'
  
  constructor(public http: HttpClient) {
    this.headers = this.headers
      .set('Authorization', this.bearerAuth)
      .set('X-TENANT-ID', this.tenantId);
  }

  getAllComuni() {
    return this.http.get<IComuni[]>(environment.serverAddress + 'api/comuni?page=0&size=20&sort=id,ASC', {headers: this.headers});
  }

  getComuneById(id: number){
    return this.http.get<IComuni>(this.urlAPI + id);
  }

  deleteComuneById(id: number){
    return this.http.delete(this.urlAPI + id);
  }

  updateComuneById(modificheComune: IComuni){
    return this.http.put(this.urlAPI + modificheComune.id, modificheComune);
  }

  createComune(nuovoComune: IComuni){
    return this.http.post(this.urlAPI , nuovoComune);
  }

}
