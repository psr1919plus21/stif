/* global Vue */

import mediator from '../../services/mediator';
import api from '../../services/api';
import template from './headerTpl';

Vue.component('header-cmp', {
  template: template,
  data: function() {
    return {
      sources: [],
      baseChanels: [{
        key: 'google',
        name: 'google'
      }, {
        key: 'bbc',
        name: 'bbc'
      }, {
        key: 'cnn',
        name: 'cnn'
      }]
    }
  },
  methods: {
    showChanel: function(chanel) {
      mediator.$emit('chanelSelected', chanel);
    }
  },
  mounted: function() {
    api.getSources().then((data) => {
      this.sources = data.body.sources;
    });
  }
})
