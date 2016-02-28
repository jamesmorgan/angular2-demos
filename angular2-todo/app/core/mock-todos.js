System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var TODOS;
    return {
        setters:[],
        execute: function() {
            exports_1("TODOS", TODOS = [
                { todo: '1', created: new Date(), done: false },
                { todo: '2', created: new Date(), done: false },
                { todo: '3', created: new Date(), done: false }
            ]);
        }
    }
});
//# sourceMappingURL=mock-todos.js.map