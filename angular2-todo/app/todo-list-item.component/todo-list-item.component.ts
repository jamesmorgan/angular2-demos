import { ChangeDetectionStrategy, Component, Input } from 'angular2/core';
import {TodoService} from "../core/todo.service";

@Component({
    selector: 'todo-list-item',
    templateUrl: 'app/todo-list-item.component/todo-list-item.component.html',
    styleUrls: ['app/todo-list-item.component/todo-list-item.component.css']
})

export class TodoListItemComponent {

    @Input() todo:Todo;
    @Input() index:number;

    constructor(private _todoService:TodoService) {
    }

    markAsComplete(todo:Todo) {
        this._todoService.markDone(todo, this.index);
    }

    markAsOpen(todo:Todo) {
        this._todoService.markIncomplete(todo, this.index);
    }
}
