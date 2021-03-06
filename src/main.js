// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import MintUI from 'mint-ui';
import VueLazyload from 'vue-lazyload';
import 'mint-ui/lib/style.css';
import App from './App';
import router from './router';
import './../static/iconfont/iconfont.css';
import './assets/css/index.scss';


Vue.config.productionTip = false;
Vue.use(MintUI);
Vue.use(VueLazyload, {
  loading: require('./assets/img/default.png')
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
