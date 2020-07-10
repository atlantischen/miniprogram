import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'amfe-flexible'
import './assets/css/reset.css'
// import VueAwesomeSwiper from 'vue-awesome-swiper'
// import 'swiper/swiper-bundle.css'
// Vue.use(VueAwesomeSwiper /* { default options with global component } */)



Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
