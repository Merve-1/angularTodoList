import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../model/todo.type';

@Pipe({
  name: 'filterTodox'
})
export class FilterTodoxPipe implements PipeTransform {

  transform(todox: Todo[], searchTerm:string): Todo[] {
    if(!searchTerm){
      return todox;
    }
    const text = searchTerm.toLowerCase();
    return todox.filter(todo=>{
        return todo.title.toLowerCase().includes(text);
    });
  }

}
