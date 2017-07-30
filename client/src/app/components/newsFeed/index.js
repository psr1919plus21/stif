/* global Vue */

import mediator from '../../services/mediator';
import api from '../../services/api';
import template from './newsFeedTpl';

const body = document.querySelector('body');

Vue.component('news-feed', {
  template: template,
  data: function() {
    return {
      articles: []
    }
  },
  methods: {
  },
  created: function() {
    mediator.$on('chanelSelected', (chanel) => {
      this.articles = [];
      body.classList.add('vue-app-preload');
      api.getNews(chanel).then((data) => {
        body.classList.remove('vue-app-preload');
        this.articles = data.body.articles;
      });
    });
  },
  mounted: function() {
    api.getNews('google-news').then((data) => {
      this.articles = data.body.articles;
    });
  }
})
