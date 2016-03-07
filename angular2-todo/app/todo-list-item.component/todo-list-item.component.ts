import { ChangeDetectionStrategy, Component, Input } from 'angular2/core';
import {TodoService} from "../core/todo.service";
import {EventEmitter} from "angular2/core";
import {Output} from "angular2/core";

@Component({
    /**
     * When using OnPush detectors, then the framework will check an OnPush component when
     * any of its input properties changes, when it fires an event, or when an observable fires an event
     */
    //changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'todo-list-item',
    templateUrl: 'app/todo-list-item.component/todo-list-item.component.html',
    styleUrls: ['app/todo-list-item.component/todo-list-item.component.css']
})

export class TodoListItemComponent {

    @Input() todo:Todo;
    @Input() index:number;

    edit:boolean = false;

    constructor(private _todoService:TodoService) {
    }

    markAsComplete() {
        this._todoService.markDone(this.todo, this.index);
    }

    markAsOpen() {
        this._todoService.markIncomplete(this.todo, this.index);
    }

    removeTodo() {
        this._todoService.deleteTodo(this.todo, this.index);
    }

    edit() {
        console.log('TODO edit', this.todo);
    }
}
