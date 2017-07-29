let template = `
  <div class="example-component">
    <div class="example-component__title">Это пользовательский Vue копмонент из
     <b>components/MyComponent</b>, который представляет собой приложение
     таск-менеджер</div>

    <input class="todo-input" type="text"
      placeholder="Добавить задачу"
      v-on:keydown.enter="addTodo">

    <ul class="todo-list">
      <li  class="todo-list__item"
        v-for="todo in todos"
        v-on:click="complete(todo)"
        v-bind:class="{ 'todo-list__item_completed' : todo.completed }">{{todo.val}}</li>
    </ul>

  </div>
`;

export default template;
