"use strict";
exports.__esModule = true;
var Todo = /** @class */ (function () {
    function Todo(content) {
        this.content = content;
        this.done = false;
    }
    Todo.prototype.markDone = function () {
        this.done = true;
    };
    Todo.prototype.markTodo = function () {
        this.done = false;
    };
    return Todo;
}());
exports["default"] = Todo;
