import Vue from 'vue';
import App from '@/App.vue';
// import Emoji from '@/components/Emoji';
import router from '@/routers';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router
}).$mount('#app');
