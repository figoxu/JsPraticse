var TodoComponent = Vue.extend({
    data: function () {
        return {
            inEditMode: false
        }
    },
    props:['todo'],
    template: '<div><span v-show="!inEditMode" @click="clicked">{{ todo.title }}</span><input v-show="inEditMode" @keyup.enter="saved" type="text" v-model="todo.title"/></div>',
    methods: {
        clicked: function () {
            this.inEditMode = true;
        },
        saved:function(){
            this.inEditMode = false;
        }
    }
});

Vue.component("todo-component", TodoComponent);

new Vue({
    el: "#app",
    data: {
        message: 'Hello Vue Todo App',
        someLink: 'http://www.google.com.hk',
        todos: [
            {title: 'Todo 1'},
            {title: 'Todo 2'},
            {title: 'Todo 3'},
            {title: 'Todo 4'},
            {title: 'Todo 5'}
        ],
        showTodos: true,
        todoText: "",
        count: 0
    },
    methods: {
        createTodo: function () {
            console.log("enter")
            var todoText = this.todoText.trim();
            if (todoText) {
                this.todos.push({title: todoText});
                this.todoText = "";
            }
        },
        clearTodo: function () {
            this.todoText = '';
        },
        increaseCount: function () {
            this.count++;
        },
        removeTodo: function (index) {
            this.todos.splice(index, 1);
        }
    }
});