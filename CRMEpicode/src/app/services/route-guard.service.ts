import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  login: boolean = true;


  constructor() { }

  canActivate(route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): boolean  {
    return this.login;
  }

  setLogin() {
    this.login = !this.login;
  }



}
