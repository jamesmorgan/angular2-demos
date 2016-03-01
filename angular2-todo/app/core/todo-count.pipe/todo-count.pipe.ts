import { Pipe, PipeTransform } from 'angular2/core';

@Pipe({
    name: 'todoCount',
    pure: true
})
export class TodoCountPipe implements PipeTransform {

    transform(todos:Todo[], filterType?:string[]) {
        console.log('pipe', todos);
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
