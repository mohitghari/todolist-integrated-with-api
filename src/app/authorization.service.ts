import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor(private httpClient:HttpClient) { }

  login(username: string, password: string): Observable<any>{
    return this.httpClient.post(
        'http://192.168.2.136:3000/login',
        {
            username,
            password
        }
    );
}
}
