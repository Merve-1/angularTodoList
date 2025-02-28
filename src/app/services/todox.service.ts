import { inject, Injectable } from '@angular/core';
import { Todo } from '../model/todo.type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoxService {
  http = inject(HttpClient);
  
;
  getTodoxFromApi(){
    const url = `https://jsonplaceholder.typicode.com/todos`
    return this.http.get<Array<Todo>>(url);

  }
}
