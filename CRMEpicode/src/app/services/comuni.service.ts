import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IComuni } from '../interfaces/icomuni';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IObjComuni } from '../interfaces/iobj-comuni';
import { IProvince } from '../interfaces/iprovince';


@Injectable({
  providedIn: 'root'
})
export class ComuniService {

  private urlAPI = environment.serverAddress + 'api/comuni/';
  comuni: IComuni[] = [];
  constructor(public http: HttpClient) {
  }

  getAllComuni() {
    return this.http.get<IObjComuni>(environment.serverAddress + 'api/comuni?page=0&size=20&sort=id,ASC');
  }

  getComuneByProvince(provincia: IProvince){
    this.getAllComuni().subscribe(resp => this.comuni = resp.content)
    return this.comuni.filter(comune => comune.provincia.sigla == provincia.sigla);
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
