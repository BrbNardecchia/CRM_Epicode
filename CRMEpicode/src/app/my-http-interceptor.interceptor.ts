import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from './services/login.service';

@Injectable()
export class MyHttpInterceptorInterceptor implements HttpInterceptor {

  // bearerAuth = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTYzNjYyMDk5OSwiZXhwIjoxNjM3NDg0OTk5fQ.IGE9KwKcGURkVCP_hiaXjE5-pox5v4gafbRxCivFrGA2EqWSzJvlrnOjy0hCj3mF2QFOYKEy-gLbgCNjl0sjHQ';
  tenantId='fe_0421';

  constructor(private loginService: LoginService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    let myRequest: HttpRequest<any> = request;
    
    myRequest= request.clone({headers: request.headers
      .set('Authorization', 'Bearer ' + this.loginService.setToken())
      .set('X-TENANT-ID', this.tenantId)})
      
    return next.handle(myRequest);
  }
}
