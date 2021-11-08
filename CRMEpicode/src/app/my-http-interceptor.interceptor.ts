import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MyHttpInterceptorInterceptor implements HttpInterceptor {

  bearerAuth = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTYzNjM3OTYxNywiZXhwIjoxNjM3MjQzNjE3fQ.wXwJgdHRzf-03lmnIy-Vcg5D3pY9dNTnl5eyhOyAkCJQnGOm498D0ZcdkLXN8HCksmxlrBTRcBcL4ELu-9303Q';
  tenantId='fe_0421';

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    let myRequest: HttpRequest<any> = request;
    
    myRequest= request.clone({headers: request.headers
      .set('Authorization', 'Bearer ' + this.bearerAuth)
      .set('X-TENANT-ID', this.tenantId)})
      
    return next.handle(myRequest);
  }
}
