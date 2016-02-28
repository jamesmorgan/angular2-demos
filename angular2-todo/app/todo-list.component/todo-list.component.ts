import { ChangeDetectionStrategy, Component, Input } from 'angular2/core';
import { RouterLink, RouteParams } from 'angular2/router';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'todo-list',
    templateUrl: 'app/todo-list.component/todo-list.component.html',
    styleUrls: ['app/todo-list.component/todo-list.component.css']
})

export class TodoListComponent {

    @Input()
    todoList:Todo[];

    constructor() {
    }
}
