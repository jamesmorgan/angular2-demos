import {Component, Input } from 'angular2/core';
import {TodoListItemComponent} from "../todo-list-item.component/todo-list-item.component";
import {ChangeDetectionStrategy} from "angular2/core";

@Component({
    selector: 'todo-list',
    templateUrl: 'app/todo-list.component/todo-list.component.html',
    styleUrls: ['app/todo-list.component/todo-list.component.css'],
    directives: [TodoListItemComponent]
})
export class TodoListComponent {

    @Input() todoList:Todo[];

    constructor() {
    }
}
