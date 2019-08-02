import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Todo, TodoResponse } from './todo';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class TodolistService {

  constructor(private httpClient:HttpClient) { }

  getTodo(): Observable<[Todo]>{

    return this.httpClient.get<TodoResponse>('http://192.168.2.136:3000/todo')
    .pipe(
      map(
        (response: TodoResponse) => {
          return response.todo;
        }
      )
    )
  }
}
