import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { TodoListComponent } from './todo-list/todo-list.component';

const routes: Routes = [
  { path: 'signin', component: SignInComponent },
  { path: 'todo-list', component: TodoListComponent },

 // { path: '/todo-list', component: SignInComponent },
  { path: '', redirectTo: '/signin', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
