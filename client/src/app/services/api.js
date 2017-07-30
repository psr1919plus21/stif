/* global Vue */

import VueResource from 'vue-resource';

Vue.use(VueResource);

const API_KEY = '956918925cff4bbf971eb06f42e34b20';
let urls = {
  sources: 'https://newsapi.org/v1/sources?language=en'
}

function getUrlForChanel(chanel) {
  return `https://newsapi.org/v1/articles?source=${chanel}&apiKey=${API_KEY}`
}

let api = {
  getSources() {
    return Vue.http.get(urls.sources);
  },
  getNews(chanel) {
    console.log('get ', chanel);
    return Vue.http.get(getUrlForChanel(chanel));
  }
}

export default api;
