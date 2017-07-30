(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var template = "\n  <div class=\"example-component\">\n    <div class=\"example-component__title\">\u042D\u0442\u043E \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u0439 Vue \u043A\u043E\u043F\u043C\u043E\u043D\u0435\u043D\u0442 \u0438\u0437\n     <b>components/MyComponent</b>, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 \u0441\u043E\u0431\u043E\u0439 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435\n     \u0442\u0430\u0441\u043A-\u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440</div>\n\n    <input class=\"todo-input\" type=\"text\"\n      placeholder=\"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u0434\u0430\u0447\u0443\"\n      v-on:keydown.enter=\"addTodo\">\n\n    <ul class=\"todo-list\">\n      <li  class=\"todo-list__item\"\n        v-for=\"todo in todos\"\n        v-on:click=\"complete(todo)\"\n        v-bind:class=\"{ 'todo-list__item_completed' : todo.completed }\">{{todo.val}}</li>\n    </ul>\n\n  </div>\n";

exports.default = template;

},{}],2:[function(require,module,exports){
'use strict';

var _MyComponentTpl = require('./MyComponentTpl');

var _MyComponentTpl2 = _interopRequireDefault(_MyComponentTpl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Vue.component('my-component', {
  template: _MyComponentTpl2.default,
  data: function data() {
    return {
      todos: [{ val: 'Завести кота', completed: false }, { val: 'Погладить кота', completed: false }, { val: 'Покормить кота', completed: false }]
    };
  },
  methods: {
    complete: function complete(todo) {
      todo.completed = !todo.completed;
    },
    addTodo: function addTodo(e) {
      var inputElement = e.target;
      var todoText = inputElement.value;
      if (!todoText) {
        return;
      }
      this.todos.unshift({ val: todoText, completed: false });
      inputElement.setAttribute('placeholder', 'Добавить еще одну задачу');
      inputElement.value = '';
    }
  }
}); /* global Vue */

},{"./MyComponentTpl":1}],3:[function(require,module,exports){
'use strict';

require('./components/MyComponent');

new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  },
  mounted: function mounted() {
    this.$el.classList.remove('vue-app-preload');
  }
}); /* global Vue */

},{"./components/MyComponent":2}]},{},[3]);
