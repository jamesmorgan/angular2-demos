import { Pipe, PipeTransform } from 'angular2/core';

@Pipe({
    name: 'todoCount',
    pure: false
})
export class TodoCountPipe implements PipeTransform {

    transform(todos:Todo[], filterType?:string[]) {
        if (!todos || !filterType) {
            return todos;
        }

        switch (filterType[0]) {
            case 'completed':
                return todos.filter(function (todo) {
                    return todo.done == true
                });
            case 'open':
                return todos.filter(function (todo) {
                    return todo.done == false;
                });
            default:
                return todos;
        }
    }
}
