System.register(['angular2/core', "../core/todo.service", '../todo-form.component/todo-form.component', '../todo-list.component/todo-list.component'], function(exports_1, context_1) {
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
    var core_1, todo_service_1, todo_form_component_1, todo_list_component_1;
    var TodoDashboardComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (todo_service_1_1) {
                todo_service_1 = todo_service_1_1;
            },
            function (todo_form_component_1_1) {
                todo_form_component_1 = todo_form_component_1_1;
            },
            function (todo_list_component_1_1) {
                todo_list_component_1 = todo_list_component_1_1;
            }],
        execute: function() {
            TodoDashboardComponent = (function () {
                function TodoDashboardComponent(_todoService) {
                    var _this = this;
                    this._todoService = _todoService;
                    this._subscription = this._todoService.todoListChange.subscribe(function () { return _this.getTodoList(); });
                }
                TodoDashboardComponent.prototype.ngOnDestroy = function () {
                    this._subscription.unsubscribe();
                };
                TodoDashboardComponent.prototype.ngOnInit = function () {
                    this.getTodoList();
                };
                TodoDashboardComponent.prototype.getTodoList = function () {
                    console.log('Calling getTodoList()');
                    this.todoList = this._todoService.todoList;
                };
                TodoDashboardComponent = __decorate([
                    core_1.Component({
                        selector: 'my-todo-dashboard',
                        templateUrl: 'app/todo-dashboard.component/todo-dashboard.component.html',
                        styleUrls: ['app/todo-dashboard.component/todo-dashboard.component.css'],
                        directives: [todo_form_component_1.TodoFormComponent, todo_list_component_1.TodoListComponent]
                    }), 
                    __metadata('design:paramtypes', [todo_service_1.TodoService])
                ], TodoDashboardComponent);
                return TodoDashboardComponent;
            }());
            exports_1("TodoDashboardComponent", TodoDashboardComponent);
        }
    }
});
//# sourceMappingURL=todo-dashboard.component.js.map