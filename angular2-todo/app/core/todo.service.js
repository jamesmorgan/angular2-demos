System.register(["angular2/core", "./mock-todos"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, core_2, mock_todos_1;
    var TodoService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            },
            function (mock_todos_1_1) {
                mock_todos_1 = mock_todos_1_1;
            }],
        execute: function() {
            TodoService = (function () {
                function TodoService() {
                    this.todoList = mock_todos_1.TODOS;
                    this.todoListChange = new core_2.EventEmitter();
                    this.todoListChange.emit(this.todoList);
                }
                TodoService.prototype.addTodo = function (todo) {
                    console.log('Adding todo', todo);
                    this.todoList.push(todo);
                    this.todoListChange.emit(this.todoList);
                };
                TodoService.prototype.deleteTodo = function (todo, index) {
                    console.log('Deleting todo at index', index);
                    this.todoList.splice(index, 1);
                    this.todoListChange.emit(this.todoList);
                };
                TodoService.prototype.markDone = function (todo) {
                    todo.done = true;
                    this.todoListChange.emit(this.todoList);
                };
                TodoService.prototype.markIncomplete = function (todo) {
                    todo.done = false;
                    this.todoListChange.emit(this.todoList);
                };
                TodoService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], TodoService);
                return TodoService;
            }());
            exports_1("TodoService", TodoService);
        }
    }
});
//# sourceMappingURL=todo.service.js.map