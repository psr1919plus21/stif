/* global Vue */

import mediator from '../../services/mediator';
import api from '../../services/api';
import template from './headerTpl';

const html = document.querySelector('html');
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

function toggleMaxChanelsByMedia() {
  let maxChanels;
  let _matchMediaObject = window.matchMedia("(max-width: 414px)");
  maxChanels = _matchMediaObject.matches ? 0 : 3;
  return maxChanels;
}

Vue.component('header-cmp', {
  template: template,
  data: function() {
    return {
      sources: [],
      openControl: false,
      baseChanels: baseChanels,
      search: '',
      chanelsOverflow: false,
      hidenChanelsActive: false,
      maxChanelsInNav: 3
    }
  },
  methods: {
    showChanel: function($event, chanel) {
      mediator.$emit('chanelSelected', chanel);
      let activeChanel = document.querySelector('.header-chanels__button_active');
      if (activeChanel) {
        activeChanel.classList.remove('header-chanels__button_active');
      }
      $event.target.classList.add('header-chanels__button_active');
    },
    showChanelsControl: function() {
      let vm = this;
      this.openControl = !this.openControl;
      html.classList.toggle('no-scroll');
      body.classList.toggle('no-scroll');
      setTimeout(function() {
        vm.$refs.search.focus();
      }, 0);

    },
    inBasicChanels: function(chanel) {
      return this.baseChanels.some((baseChanel) => {
        return baseChanel.key === chanel;
      });
    },
    toggleChanel: function(chanel) {
      let inBasics = this.inBasicChanels(chanel);
      if (inBasics) {
        this.removeChanel(chanel);
      } else {
        this.addChanel(chanel);
      }
    },
    addChanel: function(chanel) {
      let newChanel = {
        key: chanel,
        name: chanel
      }
      this.baseChanels.unshift(newChanel);
    },
    removeChanel: function(chanel) {
      this.baseChanels.some((baseChanel, index) => {
        if (baseChanel.key === chanel) {
          this.baseChanels.splice(index, 1);
          return true;
        }
      });
    },
    toggleHiddenChanels: function() {
      this.hidenChanelsActive = !this.hidenChanelsActive;
    }
  },
  watch: {
    baseChanels: function(newBaseChanels) {
      localStorage.setItem('baseChanels', JSON.stringify(newBaseChanels));
    }
  },
  computed: {
    localSources: function() {
      if (!this.search.length) {
        return this.sources;
      } else {
        let search = this.search.toLowerCase();
        return this.sources.filter((source) => {
          let name = source.name.toLowerCase();
          let category = source.category.toLowerCase();
          return name.indexOf(search) !== -1 || category.indexOf(search) !== -1;
        });
      }
    },
    chanels: function() {
      let chanelsCount = this.baseChanels.length;
      console.log(this.maxChanelsInNav);
      this.chanelsOverflow = chanelsCount > this.maxChanelsInNav;
      return this.baseChanels.slice(0, this.maxChanelsInNav);
    },
    hiddenChanels: function() {

      return this.baseChanels.slice(this.maxChanelsInNav);
    }
  },
  mounted: function() {
    api.getSources().then((data) => {
      this.sources = data.body.sources;
    });

    mediator.$emit('showFirstChanel', this.baseChanels[0].key);
    document.querySelector('.header-chanels__button')
      .classList.add('header-chanels__button_active');

    this.maxChanelsInNav = toggleMaxChanelsByMedia();
  }
})
