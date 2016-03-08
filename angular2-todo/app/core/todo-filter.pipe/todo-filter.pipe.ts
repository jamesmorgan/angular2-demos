import { Pipe, PipeTransform } from 'angular2/core';
import {TodoService} from "../todo.service";

@Pipe({
    name: 'todosFilter',
    /**
     * Setting this to false prevents the filter from re-applying any changes to the Todo[] list
     */
    pure: false
})
export class TodoFilterPipe implements PipeTransform {

    transform(todos:Todo[], filterType?:string[]) {
        if (!todos || !filterType) {
            return todos;
        }
        switch (filterType[0]) {
            case 'completed':
                return todos.filter((todo) => {
                    return todo.done == true
                });
            case 'open':
                return todos.filter((todo) => {
                    return todo.done == false;
                });
            default:
                return todos;
        }
    }
}
