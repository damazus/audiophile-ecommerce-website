import {defineStore} from 'pinia'
import type {CartItem, Product} from "@/types";
import Vue from "vue";

interface CartState{
   cartItems: CartItem[],
   shipping: number
}

export const useCartStore = defineStore('cart', {
   state: () : CartState  => ({
      cartItems: [],
      shipping: 50,
   }),
   getters: {
      totalQuantity(): number{
         let count = 0

         if(this.cartItems.length){
            count = this.cartItems.map((item: CartItem) => item.quantity)
               .reduce((accumulator: number, currentValue: number) => accumulator + currentValue)
         }

         return count
      },
      totalWithoutTax(){
         let total = 0

         if(this.cartItems.length){
            total = this.cartItems
               .map((item: CartItem) => item.product.price * item.quantity)
               .reduce((accumulator: number, currentValue: number) => accumulator + currentValue)
         }

         return total
      },
      tax(): number{
         return parseFloat((this.totalWithoutTax * 0.2).toFixed(2))
      },
      totalWithTax(): number {
         return this.totalWithoutTax + this.tax
      },
      bigTotal(): number{
         return this.totalQuantity ? this.totalWithTax + this.shipping : 0
      }
   },
   actions: {
      add(cardItem: CartItem){
         const index = this.cartItems.findIndex((item: CartItem) => item.product.id === cardItem.product.id)

         if(index !== -1){
            const itemFound = this.cartItems[index]
            itemFound.quantity += cardItem.quantity
            this.cartItems[index] = itemFound
         }else{
            this.cartItems.push(cardItem)
         }
      },
      changeQuantity(cardItem: CartItem){
         const index = this.cartItems.findIndex((item: CartItem) => item.product.id === cardItem.product.id)

         if(index !== -1){
            const itemFound = this.cartItems[index]
            Vue.set(itemFound, 'quantity', cardItem.quantity)
         }
      },
      remove(product: Product){
         this.cartItems = this.cartItems.filter((item: CartItem) => item.product.id !== product.id)
      },
      removeAll(){
         this.cartItems = []
      }
   }
})