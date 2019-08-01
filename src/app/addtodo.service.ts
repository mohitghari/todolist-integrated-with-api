import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TodoListComponent } from './todo-list/todo-list.component';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class AddtodoService {

  // user ={
  //   id: 190,
  //   userId: 1,
  //   title: "item4",
  //   isCompleted: 0,
  //   date: "2019-06-29T07:02:03.000Z"
  // }
  constructor(private httpClient:HttpClient) { }
  baseUrl = "http://192.168.2.136:3000/todo";
  addItem(itemName:string):Observable<Todo>
  {
    console.log(itemName);
   let todo:Todo;
   todo = {
     title : itemName,
     isCompleted : false
   }
   return this.httpClient.post('http://192.168.2.136:3000/todo',todo,
    {
      headers: {
          'Authorization': 'Bearer '+localStorage.getItem('token')
      }
    });

  /*return this.httpClient.post(this.baseUrl +'api/addUser/', this.user, {
      headers: new HttpHeaders().set('Authorization', localStorage.getItem('token'))
  });*/
    

  }
}
