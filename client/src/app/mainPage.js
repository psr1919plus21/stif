/* global Vue */
import './components/MyComponent';

new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  },
  mounted: function() {
    this.$el.classList.remove('vue-app-preload');
  }
})
