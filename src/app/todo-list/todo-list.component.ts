import { Component, OnInit } from '@angular/core';

import { Location } from '@angular/common'
import { TodolistService } from '../todolist.service';
import { Todo,TodoResponse } from '../todo';
import { DeletetodoService } from '../deletetodo.service';
import { AddtodoService } from '../addtodo.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UpdatetodoService } from '../updatetodo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  contacts: Array<Todo>;
  myForm:FormGroup;
  todos: [Todo];
  selecteditemid:number;
  constructor(
    private location: Location,
    private fb:FormBuilder,
    private updatetodoservice:UpdatetodoService,
    private todolistService:TodolistService,
    private deletetodoservice:DeletetodoService,
    private addtodoservice:AddtodoService 
    ) {
    
     /* let todo: TodoTestClass = {
        userId: 0,
        title: "title",
        isCompleted: true,
        date: ""
      };

      let todoTest: TodoTestClass = {
        userId: 0,
        title: '',
        isCompleted: 0,
        date: ''
      };*/ 
   }
   additems(name)
  {
      if(name == "")
      {
        alert("empty value not allowed");
      }
       this.addtodoservice.addItem(name).subscribe(
         data => {
           console.log("success");
           //this.todos = data;
           console.log(data.id);
           this.todos.push({id:data.id,title : name});   
           // this.todos.push({data} as Todo);
           //console.log(data.title);
         },
         error =>{
           console.log(error);
         }
       )   
     
      //this.contacts.push({name} as Todo); // adding object to array contacts      
    
  }
  updateItem(title:string)
  { 
        this.updatetodoservice.updateTodo(this.selecteditemid,title).subscribe(
          data => {
            console.log("success")
            console.log(data);
            let founditem:any;
            founditem = this.todos.findIndex(value => value.id == data.id)
            this.todos[founditem].title = data.title; 
            //this.todos[{data.id}].title = data.title
          }
        );
  }
  del(id:number,index)
  { 
    console.log(id);
    //this.contacts.splice(index, 1);
      this.deletetodoservice.deletetodo(id).subscribe(
        (data) => {
          console.log("success");
         // window.location.reload();
          this.todos.splice(index,1)
        }
      );
  }
  
 select(contact:Todo) {
     contact.isCompleted = !contact.isCompleted;
     this.selecteditemid=contact.id;
     this.myForm.setValue({  
        inputtxt: contact.title + " id= " + this.selecteditemid  

  });  
  } 

  logout(){
    this.location.back();
  }
  
  ngOnInit() {
    this.myForm = this.fb.group(
      {
        inputtxt: [''],
      }
    );
    this.todolistService.getTodo()
     .subscribe(
       data => {
         this.todos = data;
       }
     );
  }

}
