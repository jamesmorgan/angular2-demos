import { ChangeDetectionStrategy, Component, Input } from 'angular2/core';
import {TodoService} from "../core/todo.service";
import {EventEmitter} from "angular2/core";
import {Output} from "angular2/core";
import {TodoCountPipe} from "../core/todo-count.pipe/todo-count.pipe";
import {ChangeDetectorRef} from "angular2/core";

@Component({
    selector: 'todo-button-bar',
    templateUrl: 'app/todo-button-bar.component/todo-button-bar.component.html',
    styleUrls: ['app/todo-button-bar.component/todo-button-bar.component.css'],
    pipes: [TodoCountPipe]
})
export class TodoButtonBarComponent {

    /**
     * This is the input to the component
     */
    @Input() todoList:Todo[];

    /**
     * This output allows you to bing to its event handler e.g. (filterChanged)="onFilterChanged($event)"
     */
    @Output() filterChanged = new EventEmitter<String>();

    /**
     * A private filter property used to control state the components.
     */
    filter:string = '';

    constructor(private _todoService:TodoService) {
    }

    clearCompleted() {
        console.log('Calling clearCompleted()');
        this._todoService.clearCompleted();
    }

    changeFilter(filter) {
        console.log('Calling changeFilter()', filter);
        this.filter = filter;
        this.filterChanged.emit(filter);
    }

}
