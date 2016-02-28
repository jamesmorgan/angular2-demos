import {Injectable} from "angular2/core";
import {ReplaySubject} from 'rxjs/subject/ReplaySubject';
import {Output} from "angular2/core";
import {EventEmitter} from "angular2/core";

import {Todo} from "./todo";
import {TODOS} from "./mock-todos";

@Injectable()
export class TodoService {

    todoList:Todo[] = [];
    todoListChange:EventEmitter = new EventEmitter<Todo[]>();

    public constructor() {
        this.todoList.push(TODOS);
        this.todoListChange.emit(null);
    }

    public addTodo(todo:Todo) {
        console.log('Adding todo', todo);
        this.todoList.push(todo);
        this.todoListChange.emit(this.todoList);
    }

    public deleteTodo(todo:Todo, index:number) {
        console.log('Deleting todo at index', index);
        this.todoList.splice(index, 1);
        this.todoListChange.emit(this.todoList);
    }

    public markDone(todo:Todo, index:number):void {
        todo.done = true;
        this.todoListChange.emit(this.todoList);
    }

    public markIncomplete(todo:Todo, index:number):void {
        todo.done = false;
        this.todoListChange.emit(this.todoList);
    }

}