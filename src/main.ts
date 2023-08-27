import Vue from 'vue'
import {createPinia, PiniaVuePlugin} from 'pinia'
import { extend } from 'vee-validate';
import * as rules from 'vee-validate/dist/rules';
import { messages } from 'vee-validate/dist/locale/en.json';

import App from './App.vue'
import router from './router'

import './assets/scss/main.scss'
import 'virtual:svg-icons-register'
import SvgIcon from '@/components/SvgIcon.vue'

Vue.component('SvgIcon', SvgIcon)
Vue.use(PiniaVuePlugin)

// install all vee-validate rules

for (const [rule, validation] of Object.entries(rules)) {
   extend(rule, {
      ...validation,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      message: messages[rule]
   });
}

const pinia = createPinia()

pinia.use(({ store }) => {

   let cardItems = localStorage.getItem('card_items')

   if(cardItems){
      cardItems = JSON.parse(cardItems)
      store.cartItems = cardItems
   }

   store.$subscribe(() => {
      const itemsString = JSON.stringify(store.$state.cartItems)
      localStorage.setItem('card_items', itemsString)
   })
})

new Vue({
   pinia,
   router,
   render: (h) => h(App)
}).$mount('#app')
