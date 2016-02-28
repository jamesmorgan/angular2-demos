System.register(['angular2/core', "../core/todo.service"], function(exports_1, context_1) {
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
    var core_1, todo_service_1;
    var TodoFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (todo_service_1_1) {
                todo_service_1 = todo_service_1_1;
            }],
        execute: function() {
            TodoFormComponent = (function () {
                function TodoFormComponent(_todoService) {
                    this._todoService = _todoService;
                    this.todo = '';
                }
                TodoFormComponent.prototype.clear = function () {
                    this.todo = '';
                };
                TodoFormComponent.prototype.submit = function () {
                    var newTodo = {
                        todo: this.todo.trim(),
                        created: new Date(),
                        done: false
                    };
                    this._todoService.addTodo(newTodo);
                    this.clear();
                };
                TodoFormComponent = __decorate([
                    core_1.Component({
                        selector: 'todo-form',
                        templateUrl: 'app/todo-form.component/todo-form.component.html',
                        styleUrls: ['app/todo-form.component/todo-form.component.css']
                    }), 
                    __metadata('design:paramtypes', [todo_service_1.TodoService])
                ], TodoFormComponent);
                return TodoFormComponent;
            }());
            exports_1("TodoFormComponent", TodoFormComponent);
        }
    }
});
//# sourceMappingURL=todo-form.component.js.map