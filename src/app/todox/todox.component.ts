import { Component, inject, OnInit, signal } from '@angular/core';
import { TodoxService } from '../services/todox.service';
import { Todo } from '../model/todo.type';
import { catchError } from 'rxjs';
import { TodoItemComponent } from '../components/todo-item/todo-item.component';

@Component({
  selector: 'app-todox',
  imports: [TodoItemComponent],
  templateUrl: './todox.component.html',
  styleUrl: './todox.component.scss'
})
export class TodoxComponent implements OnInit {
  todoService = inject(TodoxService);
  todoItems = signal<Array<Todo>>([]);

  ngOnInit(): void {

    this.todoService.getTodoxFromApi().pipe(
      catchError((err) =>
      {
          console.log(err);
          throw err;
      })
    ).subscribe((todox) =>{
      this.todoItems.set(todox);
    });}
  
  updatedTodoItem(todoItem:Todo){
    this.todoItems.update((todox)=>{
      return todox.map(todo=>{
        if (todo.id === todoItem.id){
        return{
          ...todoItem, completed: !todoItem.completed
      }  
        }
        
          return todo;
        });
      });
    }
  
  }



