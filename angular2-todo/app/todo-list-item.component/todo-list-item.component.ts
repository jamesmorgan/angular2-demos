import { ChangeDetectionStrategy, Component, Input } from 'angular2/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'todo-list-item',
    templateUrl: 'app/todo-list-item.component/todo-list-item.component.html',
    styleUrls: ['app/todo-list-item.component/todo-list-item.component.css']
})

export class TodoListItemComponent {

    @Input() todo:Todo;

    constructor() {
    }
}
