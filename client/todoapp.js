"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = __importDefault(require("vue"));
var vue_class_component_1 = __importDefault(require("vue-class-component"));
var TodoApp = /** @class */ (function (_super) {
    __extends(TodoApp, _super);
    function TodoApp() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.myName = "lihaizhen";
        _this.todos = [" 学习 CSS", " 学习 JS"];
        _this.newTodoContent = "";
        _this.newTodoError = "";
        return _this;
    }
    TodoApp.prototype.submit = function (event) {
        var content = this.newTodoContent.trim();
        if (content.length < 1) {
            this.newTodoError = "待办事项内容不能为空";
            event.preventDefault();
            return false;
        }
        // TODO submit form
    };
    TodoApp = __decorate([
        vue_class_component_1.default
    ], TodoApp);
    return TodoApp;
}(vue_1.default));
var app = new TodoApp({ el: "#app" });
exports.default = app;
