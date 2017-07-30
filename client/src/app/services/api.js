/* global Vue */

import VueResource from 'vue-resource';

Vue.use(VueResource);

const API_KEY = '956918925cff4bbf971eb06f42e34b20';
let urls = {
  google: 'https://newsapi.org/v1/articles?source=google-news&apiKey=' + API_KEY,
  bbc: 'https://newsapi.org/v1/articles?source=bbc-news&apiKey=' + API_KEY,
  cnn: 'https://newsapi.org/v1/articles?source=cnn&apiKey=' + API_KEY,
  sources: 'https://newsapi.org/v1/sources?language=en'
}

let api = {
  getSources() {
    return Vue.http.get(urls.sources);
  },
  getNews(chanel) {
    console.log('get ', chanel);
    return Vue.http.get(urls[chanel]);
  }
}

// this.$http.get('/someUrl').then(response => {
//
//     // get body data
//     this.someData = response.body;
//
//   }, response => {
//     // error callback
//   });

export default api;
