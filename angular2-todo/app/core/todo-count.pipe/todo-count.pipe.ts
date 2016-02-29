import { Pipe, PipeTransform } from 'angular2/core';

@Pipe({
    name: 'todoCount'
})
export class TodoCountPipe implements PipeTransform {
    transform(todos:Todo[], filterType?:string[]) {
        if (!todos || !filterType) {
            return todos.length;
        }
        switch (filterType[0]) {
            case 'completed':
                return todos.filter(function (todo) {
                    return !todo.done
                }).length;
            case 'open':
                return todos.filter(function (todo) {
                    return todo.done
                }).length;
            default:
                return todos.length;
        }
    }
}
