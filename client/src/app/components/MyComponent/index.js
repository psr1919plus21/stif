/* global Vue */

import template from './MyComponentTpl';

Vue.component('my-component', {
  template: template,
  data: function() {
    return {
      todos: [
        {val: 'Завести кота', completed: false},
        {val: 'Погладить кота', completed: false},
        {val: 'Покормить кота', completed: false}
      ]
    }
  },
  methods: {
    complete: function (todo) {
      todo.completed = !todo.completed
    },
    addTodo: function (e) {
      let inputElement = e.target;
      let todoText = inputElement.value;
      if (!todoText) {
        return;
      }
      this.todos.unshift({val: todoText, completed: false});
      inputElement.setAttribute('placeholder', 'Добавить еще одну задачу');
      inputElement.value = '';
    }
  }
})
