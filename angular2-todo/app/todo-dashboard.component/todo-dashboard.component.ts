import {Component, OnInit, OnDestroy} from 'angular2/core';
import {EventEmitter} from "angular2/core";
import {Observable} from "rxjs/Observable";
import {Subscription} from "rxjs/Subscription";
import {ChangeDetectionStrategy} from "angular2/core";
import {Output} from "angular2/core";

import {TodoService} from "../core/todo.service";
import {TodoFormComponent} from '../todo-form.component/todo-form.component';
import {TodoListComponent} from '../todo-list.component/todo-list.component';
import {TodoCountPipe} from "../core/todo-count.pipe/todo-count.pipe";

// This is only required as I also use TodoListItemComponent internally to demonstrate parent -> child binding
import {TodoListItemComponent} from "../todo-list-item.component/todo-list-item.component";

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'my-todo-dashboard',
    templateUrl: 'app/todo-dashboard.component/todo-dashboard.component.html',
    styleUrls: ['app/todo-dashboard.component/todo-dashboard.component.css'],
    pipes: [TodoCountPipe],
    directives: [TodoFormComponent, TodoListComponent, TodoListItemComponent]
})
export class TodoDashboardComponent implements OnInit, OnDestroy {

    todoList:Todo[] = [];

    private _subscription:EventEmitter<Todo[]>;

    constructor(private _todoService:TodoService) {
        this._subscription = this._todoService.todoListChange.subscribe(() => this.getTodoList());
    }

    ngOnDestroy() {
        console.log('Calling ngOnDestroy()');
        this._subscription.unsubscribe();
    }

    ngOnInit() {
        console.log('Calling ngOnInit()');
        this.getTodoList();
    }

    getTodoList() {
        console.log('Calling getTodoList()', this._todoService.todoList);
        this.todoList = this._todoService.todoList;
    }
}