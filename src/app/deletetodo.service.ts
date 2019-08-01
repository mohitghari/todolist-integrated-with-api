import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DeletetodoService {

  constructor(private httpClient:HttpClient) { }

  deletetodo(id:number):Observable<any>
  {
        return this.httpClient.delete('http://192.168.2.136:3000/todo/' + id ,{
          headers : {
            'Authorization': 'Bearer '+localStorage.getItem('token')
          }
        })
  }
}
