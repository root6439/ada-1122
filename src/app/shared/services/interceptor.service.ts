import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InterceptorService implements HttpInterceptor {
  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authToken = 'b42ed9b7-6311-446d-a2c0-7ab9f274ca92';

    const authReq = req.clone({
      headers: req.headers.set('X-Api-Key', authToken),
    });

    return next.handle(authReq);
  }
}