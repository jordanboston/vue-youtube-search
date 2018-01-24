// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import Buefy from 'buefy';
import axios from 'axios';
import YouTubeSearch from 'youtube-api-search';

Vue.use(Buefy, {
  defaultIconPack: 'fa',
});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // h is an alias to createElement
  render: h => h(App),
});
