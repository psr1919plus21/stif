/* global Vue */

import mediator from '../../services/mediator';
import api from '../../services/api';
import template from './newsFeedTpl';

Vue.component('news-feed', {
  template: template,
  data: function() {
    return {
      articles: []
    }
  },
  methods: {
    loadNews: function () {
      api.getSources().then((data) => {
        console.log(data);
      });
    }
  },
  created: function() {
    mediator.$on('chanelSelected', (chanel) => {
      api.getNews(chanel).then((data) => {
        this.articles = data.body.articles;
      });
    });
  },
  mounted: function() {
    api.getNews('google').then((data) => {
      this.articles = data.body.articles;
    });
  }
})
