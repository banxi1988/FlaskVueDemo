#-*- coding:utf-8 -*-

from __future__ import unicode_literals
from flask import Flask, render_template, request,redirect,jsonify


app = Flask("todoapp")

todos = [
    "学习 JS",
    "学习 html"
]

@app.route('/api/todos')
def api_todos():
    return jsonify(todos=todos)

@app.route('/')
def home():
    return app.send_static_file("home.html")

@app.route('/deleteTodo/<string:content>')
def deleteTodo(content):
    global todos
    index = todos.index(content)
    del todos[index]
    return  redirect('/')

if __name__ == '__main__':
    app.run(port=5000, debug=True)
