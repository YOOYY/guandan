// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//commom data
import global_ from '../src/assets/common.vue'
Vue.prototype.GLOBAL = global_
//meta
import MetaInfo from 'vue-meta-info'
Vue.use(MetaInfo)
// vuex
import store from '../store/store'

Vue.config.productionTip = true;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  mounted () {
    document.dispatchEvent(new Event('render-event'));
  }
})
