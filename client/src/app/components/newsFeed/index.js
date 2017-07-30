/* global Vue */

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
  mounted: function() {
    api.getNews().then((data) => {
      this.articles = data.body.articles;
    });
  }
})
