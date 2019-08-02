import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    console.log("interceptor called");
    
    var authHeader = 'Bearer ' + localStorage.getItem('token');
    const authRequest = req.clone({
      setHeaders: {
        Authorization: authHeader
      }
    });
    console.log(authRequest);
    return next.handle(authRequest);
  }
}
