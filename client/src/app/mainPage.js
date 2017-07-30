/* global Vue */
import './components/newsFeed';
import './components/header';

new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  },
  mounted: function() {
    this.$el.classList.remove('vue-app-preload');
  }
})
