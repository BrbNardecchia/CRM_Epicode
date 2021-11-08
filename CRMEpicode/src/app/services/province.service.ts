import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IProvince } from '../interfaces/iprovince';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProvinceService {

  private urlAPI = environment.serverAddress + 'api/province/';
  
  headers = new HttpHeaders();
  bearerAuth = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTYzNjM3OTYxNywiZXhwIjoxNjM3MjQzNjE3fQ.wXwJgdHRzf-03lmnIy-Vcg5D3pY9dNTnl5eyhOyAkCJQnGOm498D0ZcdkLXN8HCksmxlrBTRcBcL4ELu-9303Q'
  tenantId='fe_0421'
  
  constructor(public http: HttpClient) {
    this.headers = this.headers
      .set('Authorization', this.bearerAuth)
      .set('X-TENANT-ID', this.tenantId);
  }

  getAllProvince() {
    return this.http.get<IProvince[]>(environment.serverAddress + 'api/province?page=0&size=20&sort=id,ASC', {headers: this.headers});
  }

  getProvinciaById(id: number){
    return this.http.get<IProvince>(this.urlAPI + id);
  }

  deleteProvinciaById(id: number){
    return this.http.delete(this.urlAPI + id);
  }

  updateProvinciaById(modificheProvincia: IProvince){
    return this.http.put(this.urlAPI + modificheProvincia.id, modificheProvincia);
  }

  createProvincia(nuovoProvincia: IProvince){
    return this.http.post(this.urlAPI , nuovoProvincia);
  }
}
