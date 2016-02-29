System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var TODOS;
    return {
        setters:[],
        execute: function() {
            exports_1("TODOS", TODOS = [
                { todo: 'The first Todo', created: new Date(), done: false },
                { todo: 'Another Todo', created: new Date(), done: false },
                { todo: 'The Final mock Todo', created: new Date(), done: false }
            ]);
        }
    }
});
//# sourceMappingURL=mock-todos.js.map