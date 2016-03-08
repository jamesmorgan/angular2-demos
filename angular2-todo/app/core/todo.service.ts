import {Injectable} from "angular2/core";
import {Subject}    from 'rxjs/Subject';

import {EventEmitter} from "angular2/core";

import {Todo} from "./todo";
import {TODOS} from "./mock-todos";

@Injectable()
export class TodoService {

    todoList:Todo[] = TODOS;

    // TODO ditch this event emitter as I dont think its needed!
    todoListChange = new EventEmitter<Todo[]>();

    public constructor() {
        this.todoListChange.emit(this.todoList);
    }

    public clearCompleted():void {
        this.todoList = this.todoList.filter(function (todo) {
            return !todo.done;
        });
        this.todoListChange.emit(this.todoList);
        console.log('clearCompleted() finished', this.todoList);
    }

    public markAllAsComplete(toggleAll):void {
        console.log('clearCompleted()', toggleAll);
        this.todoList.forEach(function (todo) {
            todo.done = toggleAll;
        });
    }

    public addTodo(todo:Todo) {
        console.log('addTodo()', todo);
        this.todoList.push(todo);
        this.todoListChange.emit(this.todoList);
    }

    public deleteTodo(todo:Todo, index:number) {
        console.log('deleteTodo()', todo, index);
        this.todoList.splice(index, 1);
        this.todoListChange.emit(this.todoList);
    }

    public markDone(todo:Todo, index:number):void {
        console.log('markDone()', todo, index);
        todo.done = true;
        this.todoList[index].done = true;
        this.todoListChange.emit(this.todoList);
    }

    public markIncomplete(todo:Todo, index:number):void {
        console.log('markIncomplete()', todo, index);
        todo.done = false;
        this.todoList[index].done = false;
        this.todoListChange.emit(this.todoList);
    }
}