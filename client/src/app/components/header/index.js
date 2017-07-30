/* global Vue */

import mediator from '../../services/mediator';
import api from '../../services/api';
import template from './headerTpl';

const body = document.querySelector('body');
let baseChanels = [{
  key: 'google-news',
  name: 'google'
}, {
  key: 'bbc-news',
  name: 'bbc'
}, {
  key: 'cnn',
  name: 'cnn'
}];

baseChanels = JSON.parse(localStorage.getItem('baseChanels')) || baseChanels;

Vue.component('header-cmp', {
  template: template,
  data: function() {
    return {
      sources: [],
      openControl: false,
      baseChanels: baseChanels
    }
  },
  methods: {
    showChanel: function(chanel) {
      mediator.$emit('chanelSelected', chanel);
    },
    showChanelsControl: function() {
      this.openControl = !this.openControl;
      body.classList.toggle('no-scroll');
    },
    inBasicChanels: function(chanel) {
      return this.baseChanels.some((baseChanel) => {
        return baseChanel.key === chanel;
      });
    },
    addChanel: function(chanel) {
      let newChanel = {
        key: chanel,
        name: chanel
      }
      this.baseChanels.push(newChanel);
    },
    removeChanel: function(chanel) {
      this.baseChanels.some((baseChanel, index) => {
        if (baseChanel.key === chanel) {
          this.baseChanels.splice(index, 1);
          return true;
        }
      });
    }
  },
  watch: {
    baseChanels: function(newBaseChanels) {
      localStorage.setItem('baseChanels', JSON.stringify(newBaseChanels));
    }
  },
  mounted: function() {
    api.getSources().then((data) => {
      this.sources = data.body.sources;
    });

    mediator.$emit('showFirstChanel', this.baseChanels[0].key);
  }
})
