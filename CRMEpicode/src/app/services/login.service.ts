import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Ilogin, IloginRisp } from '../interfaces/ilogin';
import { ISignUp } from '../interfaces/isign-up';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  roles: any;
  urlAPI = environment.serverAddress + 'api/auth/';

  constructor(public http: HttpClient) { }

  LoginUser(user: Ilogin){
    return this.http.post<IloginRisp>(this.urlAPI + 'login', user)
  }

  SingUpUser(dati: ISignUp){
    return this.http.post(this.urlAPI + 'signup', dati)
  }

  setToken(){
    return localStorage.getItem('token')
  }

  setNavigationMode(){
    if(localStorage.getItem('roles')){
      this.roles = localStorage.getItem('roles')
    }
    return JSON.parse(this.roles).includes('ROLE_ADMIN')
  }

}
