import Vue from "vue"
import TodoApp from "./TodoApp.vue"

let app = new Vue({
  el: "#app",
  render: h => h(TodoApp)
})