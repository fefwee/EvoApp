import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpParams
} from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable()
export class TodoInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log(request);
    request = request.clone({
      params: new HttpParams().set('id', '1')
    })
    return next.handle(request);
  };
}
