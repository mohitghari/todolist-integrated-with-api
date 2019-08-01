import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from './todo';
@Injectable({
  providedIn: 'root'
})
export class UpdatetodoService {

  constructor(private httpClient:HttpClient) { }

  updateTodo(id:number,title:string):Observable<Todo>
  {
    return this.httpClient.put('http://192.168.2.136:3000/todo/' + id, 
    {
      title:title,
      isCompleted:false
    },
    {
      headers : {
        'Authorization': 'Bearer '+localStorage.getItem('token')
      }
    });
  }
}
