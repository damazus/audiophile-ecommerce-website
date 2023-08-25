import Vue from 'vue'

import App from './App.vue'
import router from './router'

import './assets/scss/main.scss'
import 'virtual:svg-icons-register'
import SvgIcon from '@/components/SvgIcon.vue'

Vue.component('SvgIcon', SvgIcon)

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
