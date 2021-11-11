import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IProvince } from '../interfaces/iprovince';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IObjProvince } from '../interfaces/iobj-province';

@Injectable({
  providedIn: 'root'
})
export class ProvinceService {

  private urlAPI = environment.serverAddress + 'api/province/';
  
  constructor(public http: HttpClient) {
  }

  getAllProvince() {
    return this.http.get<IObjProvince>(environment.serverAddress + 'api/province?page=0&size=150&sort=id,ASC');
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
