import Vue from 'vue'
import App from './App'
import { store } from './store/store';
import VueResource from 'vue-resource';


Vue.use(VueResource);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  render: h => h(App)
});

// Register Service Worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js', { scope: '/' }).then((reg) => {
    if (reg.installing) {
      console.log('Service worker installing');
    } else if(reg.waiting) {
      console.log('Service worker installed');
    } else if(reg.active) {
      console.log('Service worker active');
    }

  }).catch((error) => {
    console.log('Registration failed with ' + error); // Registration failed
  });
}
