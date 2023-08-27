<script lang="ts">
import {defineComponent} from 'vue'
import ButtonComponent, {BUTTON_THEMES} from '@/components/ButtonComponent.vue'
import CartItem from '@/components/CartItem.vue'
import { useCartStore } from '@/stores/cart'
import { mapStores } from "pinia";
import type { CartItem as ICartItem } from "@/types";

export default defineComponent({
   name: 'Cart',
   components: {
      ButtonComponent,
      CartItem,
   },
   props: {
      readonly: {
         type: Boolean,
         default: false
      }
   },
   data(){
      return{
         BUTTON_THEMES,
      }
   },
   computed: {
      ...mapStores(useCartStore),
      shipping(): number{
         return this.cartStore.shipping
      },
      totalQuantity(): number{
         return this.cartStore.totalQuantity
      },
      totalWithoutTax(): number{
         return this.cartStore.totalWithoutTax
      },
      totalWithTax(): number{
         return this.cartStore.totalWithTax
      },
      tax(): number{
         return this.cartStore.tax
      },
      bigTotal(): number{
         return this.cartStore.bigTotal
      },
      items(): ICartItem[]{
         return this.cartStore.cartItems
      },
      mainButtonLabel(): string{
         return this.readonly ? 'CONTINUE & PAY' : 'checkout'
      }
   },
   methods: {
      removeAll(){
         this.cartStore.removeAll()
         this.$emit('input', false)
      },
      onItemQuantityChane(item: ICartItem){
         this.cartStore.changeQuantity(item)
      }
   }
})
</script>

<template>
   <div class="cart">
      <div class="cart__header">
         <h6 v-if="readonly" class="cart__title">summary</h6>
         <template v-else>
            <h6 class="cart__title">cart
               <span class="cart__quantity-count" v-if="totalQuantity">({{ totalQuantity }})</span>
            </h6>
            <ButtonComponent
               :theme="BUTTON_THEMES.link"
               :show-icon="false"
               class="cart__button-remove-all"
               @click="removeAll">
               <span class="cart__button-remove-all-text">Remove all</span>
            </ButtonComponent>
         </template>
      </div>
      <div class="cart__body">
         <template v-if="items.length">
            <CartItem
               v-for="(item, index) in items"
               :key="index"
               :item="item"
               :readonly="readonly"
               @changeQuantity="onItemQuantityChane"
            />
         </template>
         <div v-else class="cart__no-items">Aucun produit</div>
      </div>
      <ul class="cart__info">
         <li class="cart__info-item">
            <span class="cart__info-item-label">TOTAL</span>
            <span class="cart__info-item-value">$ {{ totalWithTax }}</span>
         </li>
         <template v-if="readonly">
            <li class="cart__info-item">
               <span class="cart__info-item-label">SHIPPING</span>
               <span class="cart__info-item-value">$ {{ shipping }}</span>
            </li>
            <li class="cart__info-item">
               <span class="cart__info-item-label">VAT (INCLUDED)</span>
               <span class="cart__info-item-value">$ {{ tax }}</span>
            </li>
            <li class="cart__info-item cart__info-item--big-total">
               <span class="cart__info-item-label">GRAND TOTAL</span>
               <span class="cart__info-item-value">$ {{ bigTotal }}</span>
            </li>
         </template>
      </ul>
      <ButtonComponent
         :disabled="!totalQuantity"
         :link="{ name: 'checkout' }"
         class="cart__button-checkout">{{ mainButtonLabel }}</ButtonComponent>
   </div>
</template>

<style lang="scss">
.cart{
   padding: 30px;
   border-radius: 8px;
   background-color: var(--color-white);

   &__header {
      display: flex;
      justify-content: space-between;
      margin-bottom: 30px;
   }

   &__button-remove-all-text{
      text-transform: lowercase;
      text-decoration: underline;

      &:first-letter{
         text-transform: capitalize;
      }
   }

   &__body{
      display: flex;
      flex-direction: column;
      gap: 24px;
      margin-bottom: 32px;
   }

   &__no-items{
      font-size: 14px;
      text-align: center;
      opacity: 0.5;
   }

   &__info{
      display: flex;
      flex-direction: column;
      gap: 8px;
      margin-bottom: 24px;
   }

   &__info-item{
      display: flex;
      justify-content: space-between;
   }

   &__info-item.cart__info-item--big-total{
      margin-top: 16px;

      .cart__info-item-value{
         color: var(--color-primary);
      }
   }

   &__info-item-label{
      font-weight: 500;
      opacity: 0.5;
   }

   &__info-item-value{
      font-size: 18px;
      font-weight: 700;
   }

   &__button-checkout{
      width: 100%;
   }
}
</style>