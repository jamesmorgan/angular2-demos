import {Component, Input } from 'angular2/core';
import {TodoListItemComponent} from "../todo-list-item.component/todo-list-item.component";
import {ChangeDetectionStrategy} from "angular2/core";
import {OnInit} from "angular2/core";
import {TodoFilterPipe} from "../core/todo-filter.pipe/todo-filter.pipe";

@Component({
    selector: 'todo-list',
    templateUrl: 'app/todo-list.component/todo-list.component.html',
    styleUrls: ['app/todo-list.component/todo-list.component.css'],
    directives: [TodoListItemComponent]
    pipes: [TodoFilterPipe],
})
export class TodoListComponent implements OnInit{

    @Input() todoList:Todo[];
    @Input() filter:string;

    ngOnInit():any {
        this.filter ='';
    }

    constructor() {
    }
}
