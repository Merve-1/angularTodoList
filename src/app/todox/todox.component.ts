import { Component, inject, OnInit, signal } from '@angular/core';
import { TodoxService } from '../services/todox.service';
import { Todo } from '../model/todo.type';

@Component({
  selector: 'app-todox',
  imports: [],
  templateUrl: './todox.component.html',
  styleUrl: './todox.component.scss'
})
export class TodoxComponent implements OnInit {
  todoService = inject(TodoxService);
  todoItems = signal<Array<Todo>>([]);

  ngOnInit(): void {
    console.log(this.todoService.todoItems);
    this.todoItems.set(this.todoService.todoItems);
  }
}
