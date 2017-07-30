(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _AnotherComponent = require('./components/AnotherComponent');

var _AnotherComponent2 = _interopRequireDefault(_AnotherComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var anothrerComponentInstance = new _AnotherComponent2.default();

console.log('another page');
console.log(anothrerComponentInstance.bar);

},{"./components/AnotherComponent":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _MyComponent2 = require('../MyComponent');

var _MyComponent3 = _interopRequireDefault(_MyComponent2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AnotheComponent = function (_MyComponent) {
  _inherits(AnotheComponent, _MyComponent);

  function AnotheComponent() {
    _classCallCheck(this, AnotheComponent);

    var _this = _possibleConstructorReturn(this, (AnotheComponent.__proto__ || Object.getPrototypeOf(AnotheComponent)).call(this));

    _this._bar = 'baz';
    return _this;
  }

  _createClass(AnotheComponent, [{
    key: 'bar',
    get: function get() {
      return this._bar;
    },
    set: function set(val) {
      this._bar = val;
      return this._bar;
    }
  }]);

  return AnotheComponent;
}(_MyComponent3.default);

exports.default = AnotheComponent;

},{"../MyComponent":4}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var template = "\n  <div class=\"example-component\">\n    <div class=\"example-component__title\">\u042D\u0442\u043E \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u0439 Vue \u043A\u043E\u043F\u043C\u043E\u043D\u0435\u043D\u0442 \u0438\u0437\n     <b>components/MyComponent</b>, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 \u0441\u043E\u0431\u043E\u0439 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435\n     \u0442\u0430\u0441\u043A-\u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440</div>\n\n    <input class=\"todo-input\" type=\"text\"\n      placeholder=\"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u0434\u0430\u0447\u0443\"\n      v-on:keydown.enter=\"addTodo\">\n\n    <ul class=\"todo-list\">\n      <li  class=\"todo-list__item\"\n        v-for=\"todo in todos\"\n        v-on:click=\"complete(todo)\"\n        v-bind:class=\"{ 'todo-list__item_completed' : todo.completed }\">{{todo.val}}</li>\n    </ul>\n\n  </div>\n";

exports.default = template;

},{}],4:[function(require,module,exports){
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

},{"./MyComponentTpl":3}]},{},[1]);
