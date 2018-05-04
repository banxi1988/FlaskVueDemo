import Vue from "vue";
import TodoApp from "./TodoApp.vue";
var app = new Vue({
    el: "#app",
    render: function (h) { return h(TodoApp); }
});
