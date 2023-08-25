import { defineStore } from 'pinia'
import data from '@/data.json'
import {CATEGORIES} from "@/constants";

export const useCounterStore = defineStore({
   id: 'app',
   state: () => ({
      data: data
   }),
   getters: {
      categories: () => {
         return Object.values(CATEGORIES)
      },
      categoryProducts: (state) => {
         console.log(state)
      },
   },
   actions: {
      increment() {
         //this.counter++
      }
   }
})
