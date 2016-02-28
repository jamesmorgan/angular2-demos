import { Component } from 'angular2/core';
import {TodoService} from "../core/todo.service";

@Component({
    selector: 'todo-form',
    templateUrl: 'app/todo-form.component/todo-form.component.html',
    styleUrls: ['app/todo-form.component/todo-form.component.css']
})
export class TodoFormComponent {

    todo:string = '';

    constructor(private _todoService:TodoService) {
    }

    clear():void {
        this.todo = '';
    }

    submit():void {
        var newTodo = {
            todo: this.todo.trim(),
            created: new Date(),
            done: false
        };
        this._todoService.addTodo(newTodo);
        this.clear();
    }
}
