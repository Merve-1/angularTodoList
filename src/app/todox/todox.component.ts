import { Component, inject, OnInit, signal } from '@angular/core';
import { TodoxService } from '../services/todox.service';
import { Todo } from '../model/todo.type';
import { catchError } from 'rxjs';
import { TodoItemComponent } from '../components/todo-item/todo-item.component';
import { FormsModule } from '@angular/forms';
import { FilterTodoxPipe } from '../pipes/filter-todox.pipe';

@Component({
  selector: 'app-todox',
  imports: [TodoItemComponent, FormsModule, FilterTodoxPipe],
  templateUrl: './todox.component.html',
  styleUrl: './todox.component.scss'
})
export class TodoxComponent implements OnInit {
  todoService = inject(TodoxService);
  todoItems = signal<Array<Todo>>([]);
  searchTerm = signal('');

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



