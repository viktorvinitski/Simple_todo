import { Injectable } from '@angular/core';
import {Todo} from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  todos: Todo[] = [
    new Todo('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti dolore ipsum optio ut velit. Doloremque est eveniet fugiat modi nemo nihil pariatur quas quod quos ratione, sint soluta vero voluptatibus!', false),
    new Todo('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti dolore ipsum optio ut velit. Doloremque est eveniet fugiat modi nemo nihil pariatur quas quod quos ratione, sint soluta vero voluptatibus!', false)
  ]

  constructor() { }

  getAllTodos(){
    return this.todos
  }

  addTodo(todo: Todo){
    this.todos.push(todo)
  }

  updateTodo(index: number, updateTodo: Todo){
    this.todos[index] = updateTodo
  }

  deleteTodo(index: number){
    this.todos.splice(index, 1)
  }

}
